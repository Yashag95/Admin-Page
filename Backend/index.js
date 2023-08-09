const express = require("express");
const con = require("./config");
const app = express();
const cors = require("cors")
const { generateKeyPair } = require('crypto');
// const jwt = require('jsonwebtoken')
// const jsonwebtoken = require("jsonwebtoken");
// const bcrypt = require('bcrypt');
app.use(cors());
app.use(express.json());


// load balacing----------- Generate random key
// app.get('/key', (req, res) => {
//   generateKeyPair('rsa', {
//     modulusLength: 2048,
//     publicKeyEncoding: {
//       type: 'spki',
//       format: 'pem'
//     },
//     privateKeyEncoding: {
//       type: 'pkcs8',
//       format: 'pem',
//       cipher: 'aes-256-cbc',
//       passphrase: 'top secret'
//     }
//   }, (err, publicKey, privateKey) => {
 
//     // Handle errors and use the
//     // generated key pair.
//     res.send(publicKey);
//   })
// })
//load balacing ends here


 
app.post('/login', (req, res) => {
  const { email_id, password } = req.body;

  con.query('SELECT * FROM login WHERE email_id = ?', [email_id], (error, results, fields) => {
    if (error) throw error;
    console.log(results);

    if (results.length > 0 && results[0].password === password) {
      
      res.send({ message: 'Login successful.' });
    } else {
      res.status(401).send({ error: 'Invalid email or password.' });
    }
  });
});


// Dashboard page API ---------------------------------------------*-*---------------------------------------------
app.get("/", (req, resp) => {
  con.query("select * from ticket", (err, result) => {
    if (err) { resp.send("error in api") }
    else { resp.send(result) }

  })
});
app.get("/ticket_number/:id", (req, resp) => {
  con.query("select TicketNumber from ticket WHERE TID = (?)", [req.params.id], (err, result) => {
    if (err) { resp.send("error in api") }
    else { resp.send(result) }

  })
});
app.put('/add_remark/:id',(req, res) => {

  // console.log(req.body);
  const sql = "Update ticket set remarkByAdmin = '" + req.body.remarkByAdmin + "' where TID="  + req.params.id;
  con.query(sql, (err, results) => {
    if (err) throw err;
    res.send(JSON.stringify({ "status": 200, "error": null, "response": results }));
  });
});


app.get("/eye-data/:id", (req, resp) => {
  con.query("SELECT * FROM ticket WHERE TID = (?)", [req.params.id], (err, result) => {
    if (err) { resp.send("error in api") }
    else { resp.send(result) }

  })
});


app.get("/open_ticket", (req, resp) => {
  con.query("SELECT COUNT(*) AS 'rows' FROM ticket WHERE status = 1", (err, result) => {
    if (err) { resp.send("error in api") }
    else { resp.send(result) }

  })
});
app.get("/open_ticket_table", (req, resp) => {
  con.query("SELECT * FROM ticket WHERE status = 1", (err, result) => {
    if (err) { resp.send("error in api") }
    else { resp.send(result) }

  })
});


// status = 0 means close ticket
app.get("/close_ticket", (req, resp) => {
  con.query("SELECT COUNT(*) AS 'rows' FROM ticket WHERE status = 0", (err, result) => {
    if (err) { resp.send("error in api") }
    else { resp.send(result) }
  })
});
app.get("/close_ticket_table", (req, resp) => {
  con.query("SELECT * FROM ticket WHERE status = 0", (err, result) => {
    if (err) { resp.send("error in api") }
    else { resp.send(result) }
  })
});

app.put('/lockchange', (req, res) => {

  console.log(req.body);
  if (req.body.status == 0) {
    con.query("Update ticket set status = 1 where TID = (?)", [req.body.TID]), (err, res) => {
      if (err) { resp.send("error in api") }
      else { resp.send(res) }
    }
  }
  else if (req.body.status == 1) {
    con.query("Update ticket set status = 0 where TID = (?)", [req.body.TID]), (err, res) => {
      if (err) { resp.send("error in api") }
      else { resp.send(res) }
    }
  }
});

app.get("/ticket-history/:id", (req, resp) => {
  con.query("SELECT * FROM ticket_history WHERE ticket_id = (?)", [req.params.id], (err, result) => {
    if (err) { resp.send("error in api") }
    else { resp.send(result) }

  })
});





//AuthList page API-----------------------------------------------**------------------------------------------------

app.post("/add_authuser", (req, resp) => {
  if(req.body.email_id.trim()===''||req.body.phone.trim()===''){
    return resp.status(400).send({msg:"email or password must not be empty"})
}

  const data = req.body;
  con.query("INSERT INTO auth_user SET ?", data, (error, results) => {
    if (error) throw error;
    resp.send(results)
  })
});


app.get("/auth_list", (req, resp) => {
  con.query("select * from auth_user", (err, result) => {
    if (err) { resp.send("error in api") }
    else { resp.send(result) }

  })
});
app.get("/auth_list/:id", (req, resp) => {
  con.query("SELECT * FROM auth_user WHERE id = (?)", [req.params.id], (err, result) => {
    if (err) { resp.send("error in api") }
    else { resp.send(result) }

  })
});


app.delete('/delete_authuser', (req, res) => {
  // console.log(req.body);
  con.query("delete from auth_user where id = (?)", [req.body.id]), (err, res) => {
    if (err) { resp.send("error in api") }
    else { resp.send(res) }
  }
});



// app.put('/update_authuser/:id', (req, res) => {
//   const sql = "UPDATE auth_user SET username= '" + req.body.username + "'  , phone='" + req.body.phone + "',email_id='" + req.body.email_id + "', role_id='" + req.body.role_id + "' WHERE id=" + req.params.id;
//   con.query(sql, (err, results) => {  
//     if (err) throw err;
//     res.send(JSON.stringify({ "status": 200, "error": null, "response": results }));
//     // console.log(res);
//   });
// });

app.put('/update-admin/:id', (req, res) => {

  const {id} = req.params;

  const data1 = req.body;

  con.query("UPDATE auth_user SET ? WHERE id =?",[data1,id],(err, results) => {  
    if (err) throw err;
    res.send(JSON.stringify({ "status": 200, "error": null, "response": results }));
    // console.log(res);
  });
});






// View report page in Subscription page API---------------------------------------------*-*------------------------------------ 
app.get("/view_report", (req, resp) => {
  con.query("select * from subscription", (err, result) => {
    if (err) { resp.send("error in api") }
    else { resp.send(result) }
  })
});

app.put('/update-subs/:id', (req, res) => {
  const sql = "UPDATE subscription SET username='" + req.body.username + "', frequency='" + req.body.frequency + "',email='" + req.body.email + "', reporttype='" + req.body.reporttype + "', status='" + req.body.status + "' WHERE id=" + req.params.id;
  con.query(sql, (err, results) => {
    if (err) throw err;
    res.send(JSON.stringify({ "status": 200, "error": null, "response": results }));
  });
});

app.get("/susc_list/:id", (req, resp) => {
  con.query("SELECT * FROM subscription WHERE id = (?)",[req.params.id ], (err, result) => {
    if (err) { resp.send("error in api") } 
    else { resp.send(result) }
    
  })
});

app.delete('/delete_viewreport', (req, res) => {
  console.log(req.body);
  con.query("delete from subscription where id = (?)", [req.body.id]), (err, res) => {
    if (err) { resp.send("error in api") }
    else { resp.send(res) }
  }
});

app.post("/add_viewreport", (req, resp) => {
  if(req.body.email.trim()===''||req.body.username.trim()==='' || req.body.frequency.trim()===''||req.body.reporttype.trim()===''|| req.body.status.trim()===''){
    return resp.status(400).send({msg:"email or password must not be empty"})
}
  const data = req.body;
  con.query("INSERT INTO subscription SET ?", data, (error, results) => {
    if (error) throw error;
    resp.send(results)
  })
});



//Authlog Page API ---------------------------------------------*-*------------------------------------ ---
app.get("/authlog", (req, resp) => {
  con.query("select * from authlogs", (err, result) => {
    if (err) { resp.send("error in api") }
    else { resp.send(result) }
  })
});


//Email lof table---------------------------
app.get("/emaillog", (req, resp) => {
  con.query("select * from emailsend_log", (err, result) => {
    if (err) { resp.send("error in api") }
    else { resp.send(result) }

  })
});



app.listen("5000")