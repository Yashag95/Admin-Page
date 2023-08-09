// import { Button } from 'antd';
import axios from 'axios';
import React, { useEffect, useState, useContext } from 'react'
import DataTable from 'react-data-table-component'
import '../components/Dashboard/MysqlTable.css'
import AddUserModel from '../components/AddUserModel';
import { Modal } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom'
import { updatedata } from '../components/ContextProvider';

const AdminListTable = () => {
  const { updata, setUPdata } = useContext(updatedata);
  const navigate = useNavigate("");
  const [search, setSearch] = useState("");
  const [users, setUsers] = useState([]);
  const [filterUsers, setFilterUsers] = useState([]);
  const [show, setShow] = useState(false);
  const [username, setUsername] = useState("");
  const [email_id, setEmail_id] = useState("");
  const [phone, setphone] = useState("");
  const [role_id, setRole_id] = useState("");
  const [error,setError]=useState(false)
  const handleClose = () => setShow(false);
  const handleShow = (e) => {
    console.log(e.target.id)
    fetchata(e.target.id)
    setShow(true);
  }

  const [user, setUser] = useState({
    username: "",
    email_id: "",
    phone: "",
    role_id: ""
  })

  
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

  const handleChange = e => {

    const { name, value } = e.target
    setUser((user) => {
      return {
        ...user,
        [name]: value
      }
    })
  }


  const submitDelete = (Id) => {

    axios({
      method: "DELETE",
      url: "http://localhost:5000/delete_authuser",
      data: Id
    }).then((res) => {
      if (res.body.status === 'success') {
        alert("Admin deleted successfully")
      }
    })
  }


  const submitupdate = (Id) => {
    const { username, email_id, phone, role_id } = user;
    axios({
      method: "PUT",
      url: `http://localhost:5000/update-admin/${Id}`,
      data: user
    }).then((res) => {
      const data2 = res.json();
      console.log(data2);

      if (res.status === 422 || !data2) {
        alert("fill the data");
      } else {
        navigate.push("/")
        setUPdata(data2);
      }


    })


  }

  const [consumer, setConsumer] = useState([]);

  const [deleteshow, setDeleteShow] = useState(false);
  const deleteClose = () => setDeleteShow(false);
  // const handleDeleteShow = () => setDeleteShow(true);


  const getUsers = async () => {
    try {
      const response = await axios.get("http://localhost:5000/auth_list")
      setUsers(response.data)
      setFilterUsers(response.data)
    }
    catch (error) {
      console.log(error);
    }
  }


  const fetchata = async (d) => {

    const response = await fetch(`http://localhost:5000/auth_list/${d}`);
    const data = await response.json();
    console.log(data);

    if (response.status === 422 || !data) {
      console.log("error ");

    } else {
      setUser(data[0])
      console.log("get data");

    }

    setConsumer(data)
  }


  const changeRole = (role) => {
    if (role === 1) {
      return "Super Admin"
    }

    else if (role === 2) {
      return "Admin"
    }
    else if (role === 3) {
      return "Analyst"
    }
    else if (role === 4) {
      return "Operation"
    }
  };


  const columns = [
    {
      name: "S.No.",
      selector: (Id) => Id.id,
      sortable: true
    },
    {
      name: "Name",
      selector: (Id) => Id.username,
      sortable: true
    },
    {
      name: "Email",
      selector: (Id) => Id.email_id
    },
    {
      name: "Phone",
      selector: (Id) => Id.phone,
      sortable: true
    },
    {
      name: "Roles",
      selector: (Id) => changeRole(Id.role_id),
      sortable: true
    },
    {
      name: "Action",
      selector: (Id) => [(<i className="fas fa-edit btn btn-blue btn-sm" id={Id.id} onClick={handleShow}></i>), <i> </i>, (<i className="  fas fa-trash-alt btn btn-danger btn-sm" onClick={() => {
        const confirmBox = window.confirm(
          "Do you really want to delete this record ?"
        )
        if (confirmBox === true) {
          submitDelete(Id)
        }
      }}> </i>)]
      // selector: (Id) => [(<Button className="fas fa-edit btn btn-blue btn-sm" onClick={handleShow} ></Button>), (<Button className="  fas fa-trash-alt btn btn-danger btn-sm" onClick={handleDeleteShow}></Button>)]
    },

  ];

  useEffect(() => {
    getUsers();
  }, [])

  useEffect(() => {
    const result = users.filter((user) => {
      return (
        user.phone.toLowerCase().match(search.toLowerCase()) ||
        user.email_id.toLowerCase().match(search.toLowerCase())

      )
    });
    setFilterUsers(result);
  }, [search])


  return (
    <div>  <div id="1">
      <AddUserModel /> </div>
      <DataTable title="Admin List Table" columns={columns} data={filterUsers} pagination fixedHeader
        fixedHeaderScrollHeight='600px'
        highlightOnHover
        subHeader
        subHeaderComponent={<input type='text' placeholder='Search' className='w-25 form-control'
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />}
      />

      {/* edit model */}
      <div className="modal-dialog modal-dialog-centered modal-lg">
        {
          consumer.map((Id, key) =>
            <div key={key}>

              <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}

              >
                <Modal.Header closeButton >
                  <Modal.Title>Edit Admin</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                <form onSubmit={handleSubmit}>


                  <div className="modal-body">
                    <form method="post" id='ajaxform'>
                      <div className="mb-3 row">
                        <label for="horizontalInput2" className="col-sm-2 col-form-label">Name <span className="text-danger">*</span></label>
                        <div className="col-sm-10">
                          <input type="text" className="form-control" id='username' name="username" defaultValue={Id.username} placeholder="Enter your name" onChange={handleChange} required />
                          {error&&username.length<=0?
               <label style={{color: "red"}}>Name can't be Empty</label>:""}
                          <span id='nameerror' className="text-danger text-left"></span>
                        </div>
                      </div>
                      <div className="mb-3 row">
                        <label for="horizontalInput1" className="col-sm-2 col-form-label">Email <span className="text-danger">*</span></label>
                        <div className="col-sm-10">
                          <div className="word-break col-md-8"></div>

                          <input type="email" className="form-control" id='email' name="email_id" required defaultValue={Id.email_id} onChange={handleChange} />
                          {error&&email_id.length<=0?
               <label style={{color: "red"}}>Email can't be Empty</label>:""}
                          <span id='emailerror' className="text-danger text-left"></span>
                        </div>
                      </div>
                      <div className="mb-3 row">
                        <label for="horizontalInput1" className="col-sm-2 col-form-label" max-length="10">Phone <span className="text-danger">*</span></label>
                        <div className="col-sm-10">
                          <input type="text" id='phone' className="form-control" maxlength="10" minlength="10" name="phone" defaultValue={Id.phone} onChange={handleChange} required />
                          {error&&phone.length<=0?
               <label style={{color: "red"}}>Phone can't be Empty</label>:""}
                          <span id='phoneerror' className="text-danger text-left"></span>
                        </div>
                      </div>
                      <div className="mb-3 row">
                        <label for="horizontalInput1" className="col-sm-2 col-form-label">Roles <span className="text-danger" onChange={handleChange}>*</span></label>
                        <div className="col-sm-10">
                          <select className="form-control" id='roles' name="role_id" required >
                            <option value="">Select</option>
                            <option value="1">Super Admin</option>
                            <option value="2">Admin</option>
                            <option value="3">Analyst</option>
                            <option value="4">Operation</option>
                          </select>
                          <span id='roleerror' className="text-danger text-left"></span>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-sm-10 ms-auto">

                        </div>
                      </div>
                    </form>
                  </div>
                  <div className="modal-footer">
                    <button type="submit" name='submit' id='adminformbutton' className="btn btn-de-primary" onClick={() => { submitupdate(Id.id); deleteClose(); }} >Update</button>
                  </div>
                  </form>

                </Modal.Body>

              </Modal>
            </div>)}

        {/* Model Box Finsihs */}
      </div>
      <Modal
        show={deleteshow}
        onHide={deleteClose}
        backdrop="static"
        keyboard={false}

      >
        <Modal.Header closeButton style={{ background: "white" }}>
          {/* <Modal.Title>Edit Admin</Modal.Title> */}
        </Modal.Header>
        <Modal.Body>

          <div className='class="swal-overlay swal-overlay--show-modal' tabindex="-1">
            <div className="swal-modal" role="dialog" aria-modal="true">
              <div className="swal-icon swal-icon--warning">
                <span className="swal-icon--warning__body">
                  <span className="swal-icon--warning__dot" />
                </span>
              </div><div className="swal-title" style={{}}>Are you sure you want to delete this?</div><div className="swal-text" style={{}}>Once you Confirm, Deleted rule can't be revert back !</div><div className="swal-footer"><div className="swal-button-container">
                <button className="swal-button swal-button--cancel" tabIndex={0} onClick={deleteClose} >Cancel</button>
                <div className="swal-button__loader">
                  <div />
                  <div />
                  <div />
                </div>
              </div><div className="swal-button-container">
                  <button className="swal-button swal-button--confirm swal-button--danger"  >OK</button>
                  <div className="swal-button__loader">
                  
                  </div>
                </div></div></div>

          </div>

        </Modal.Body>
      </Modal>
      {/* <LoginPage/> */}
    </div>
  )
}

export default AdminListTable







