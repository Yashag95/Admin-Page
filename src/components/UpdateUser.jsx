import React , {useState}from 'react'
// import axios from 'axios';
import { Modal } from 'react-bootstrap';


const UpdateUser = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = (e) => {
    // console.log(e.target.id)
    // 
    // fetchata(e.target.id)
    setShow(true);
  }

  
    // axios({
    //   method: "PUT",
    //   url: "http://localhost:5000/update_authuser",
    //   data: Id
    // }).then((res) => {
    //   if (res.body.status === 'success') {
    //     alert("Record updated successfully")
    //   }
    // })
  



  return (
    <div>
       <div className="modal-dialog modal-dialog-centered modal-lg">
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
            <div>
            <button onClick={UpdateUser}>Update user</button>

              <div className="modal-body">
                <form method="post" id='ajaxform'>
                  <div className="mb-3 row">
                    <input type="hidden" name="userhiddentoken" id="userhiddentoken" value="63d0d2b88be5c" />
                    <input type="hidden" name="type" value="add_admin_form" />
                    <label for="horizontalInput2" className="col-sm-2 col-form-label">Name <span className="text-danger">*</span></label>
                    <div className="col-sm-10">
                      <input type="text" className="form-control" id='name' name="name" placeholder="Enter Name" required />
                      <span id='nameerror' className="text-danger text-left"></span>
                    </div>
                  </div>
                  <div className="mb-3 row">
                    <label for="horizontalInput1" className="col-sm-2 col-form-label">Email <span className="text-danger">*</span></label>
                    <div className="col-sm-10">
                      <input type="email" className="form-control" id='email' name="email_id" required placeholder="Enter Email" />
                      <span id='emailerror' className="text-danger text-left"></span>
                    </div>
                  </div>
                  <div className="mb-3 row">
                    <label for="horizontalInput1" className="col-sm-2 col-form-label" max-length="10">Phone <span className="text-danger">*</span></label>
                    <div className="col-sm-10">
                      <input type="text" id='phone' className="form-control" maxlength="10" minlength="10" name="phone" placeholder="Enter Phone" required />
                      <span id='phoneerror' className="text-danger text-left"></span>
                    </div>
                  </div>
                  <div className="mb-3 row">
                    <label for="horizontalInput1" className="col-sm-2 col-form-label">Roles <span className="text-danger">*</span></label>
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
                <button type="submit" name='submit' id='adminformbutton' className="btn btn-de-primary" onClick={handleShow()} >Update</button>
              </div>
            </div>
          </Modal.Body>

        </Modal>

        {/* Model Box Finsihs */}
      </div>
    </div>
  )
}

export default UpdateUser
