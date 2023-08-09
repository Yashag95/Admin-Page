import React, { useState } from 'react'
import { Modal } from 'react-bootstrap';


const AddUserModel = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [username, setUsername] = useState("");
  const [email_id, setEmail_id] = useState("");
  const [phone, setphone] = useState("");
  const [role_id, setRole_id] = useState("");
  const [error,setError]=useState(false)


  const handleSubmit=(e)=>{
    e.preventDefault();
    if(username.length==0 ||email_id.length ==0 || phone.lenght==0){
        setError(true)
    }
    if(username&&email_id&&phone)
    {
    // console.log("First Name: ",firstName,"\nLast Name: ",lastName)
    }
}

  function saveData() {
    let data = { username, email_id, phone, role_id }
    console.warn(data);
    
    fetch("http://localhost:5000/add_authuser", {
      method: "POST",
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data)
    }).then((resp) => {
      // console.warn("resp",resp);;
      resp.json().then((result) => {
        console.warn("result", result)
        
      })
    })
  }


  return (
    <div>
      <button type="submit" name='submit' className="w-btn w-btn-blue submitfunction" id='adminformbutton' style={{ marginLeft: "10px", top: "28px" }} onClick={handleShow}>Add Admin</button>
      <div className="modal-dialog modal-dialog-centered modal-lg">

        <Modal
        size='sm'
          show={show}
          onHide={handleClose}
          backdrop="static"
          keyboard={false}

        >
          <Modal.Header closeButton>
            <Modal.Title>Add Admin</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div>
            <form onSubmit={handleSubmit}>
              <div className="modal-body">
                <form method="post" >
                  <div className="mb-3 row">
                    {/* <input type="hidden" name="userhiddentoken" id="userhiddentoken" value="63d0d2b88be5c" />
                    <input type="hidden" name="type" value="add_admin_form" /> */}
                    <label for="horizontalInput2" className="col-sm-2 col-form-label">Name <span className="text-danger">*</span></label>
                    <div className="col-sm-10">
                      <input type="text" className="form-control" id='name' name="name" placeholder="Enter Name" value={username} onChange={(e) => { setUsername(e.target.value) }} minLength={5} required />
                      {error&&username.length<=0?
               <label style={{color: "red"}}>Name can't be Empty</label>:""}
                      <span id='nameerror' className="text-danger text-left"></span>
                    </div>
                  </div>
                  <div className="mb-3 row">
                    <label for="horizontalInput1" className="col-sm-2 col-form-label">Email <span className="text-danger">*</span></label>
                    <div className="col-sm-10">
                      <input type="email" className="form-control" id='email' name="email_id"  placeholder="Enter Email" value={email_id} onChange={(e) => { setEmail_id(e.target.value) }} minLength={5} required />
                      {error&&email_id.length<=0?
               <label style={{color: "red"}}>Email id can't be Empty</label>:""}
                      <span id='emailerror' className="text-danger text-left"></span>
                    </div>
                  </div>
                  <div className="mb-3 row">
                    <label for="horizontalInput1" className="col-sm-2 col-form-label" max-length="10">Phone <span className="text-danger">*</span></label>
                    <div className="col-sm-10">
                      <input type="text" id='phone' className="form-control"  name="phone" placeholder="Enter Phone" value={phone} onChange={(e) => { setphone(e.target.value) }}  minLength={5} required/>
                      {error&&phone.length<=0?
               <label style={{color: "red"}}>Phone can't be Empty</label>:""}
                      <span id='phoneerror' className="text-danger text-left"></span>
                    </div>
                  </div>
                  <div className="mb-3 row">
                    <label className="col-sm-2 col-form-label">Roles <span className="text-danger">*</span></label>
                    <div className="col-sm-10">
                      <select className="form-control" id='roles' name="role_id" required value={role_id} onChange={(e) => { setRole_id(e.target.value) }}>
                        <option value="">Select</option>
                        <option value="1">Super Admin</option>
                        <option value="2">Admin</option>
                        <option value="3">Analyst</option>
                        <option value="4">Operation</option>
                      </select>
                      <span className="text-danger text-left"></span>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-sm-10 ms-auto">

                    </div>
                  </div>
                </form>
              </div>
              <div className="modal-footer" style={{ margin: "-16px"}}> 
                <button type="submit" name='submit' id='adminformbutton' className="w-btn w-btn-blue submitfunction" onClick={() => { saveData();  }}>Submit</button>
              </div>
              </form>
            </div>
           
          </Modal.Body>

        </Modal>

        {/* Model Box ends */}
      </div>
    </div>
  )
}

export default AddUserModel
