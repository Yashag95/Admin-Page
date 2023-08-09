import React, { useState } from 'react'
import { Modal } from 'react-bootstrap';

  const AddSubscriptionModel = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [frequency, setFrequency] = useState(""); 
  const [reporttype, setReporttype] = useState("");
  const [status, setStatus] = useState("");
  function saveData() {
    let data = {email , username, frequency , reporttype, status }
    console.warn(data);
    fetch("http://localhost:5000/add_viewreport", {
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
      <button type="submit" name='submit' className="w-btn w-btn-blue submitfunction" id='adminformbutton' style={{ marginLeft: "10px", top: "28px" }} onClick={handleShow}>Add Subscription</button>
      <div className="modal-dialog modal-dialog-centered modal-lg">
        <Modal
        size='sm'
          show={show}
          onHide={handleClose}
          backdrop="static"
          keyboard={false}

        >
          <Modal.Header closeButton>
            <Modal.Title>Add Subscription</Modal.Title>
          </Modal.Header>
          <Modal.Body>
                <div className="modal-body">
                  <form method="post" id="ajaxsubscription">
                    <div className="mb-3 row">
                      <input type="hidden" name="userhiddentoken" id="userhiddentoken" defaultValue="63d8aaccd0325" />
                      <input type="hidden" name="type" defaultValue="Addsubscription" />
                      <label htmlFor="horizontalInput1" className="col-sm-3 col-form-label">Email <span className="text-danger">*</span></label>
                      <div className="col-sm-9">
                        <input type="email" className="form-control" id="email" name="email" required placeholder="Enter Email" value={email} onChange={(e) => { setEmail(e.target.value) }}  />
                      </div>
                      <span id="emailerror" className="text-center text-danger" />
                    </div>
                    <div className="mb-3 row">
                      <label htmlFor="horizontalInput1" className="col-sm-3 col-form-label">User Name <span className="text-danger">*</span></label>
                      <div className="col-sm-9">
                        <input type="text" className="form-control" id="username" name="username" required placeholder="Enter Username" value={username} onChange={(e) => { setUsername(e.target.value) }}/>
                      </div>
                      <span id="usernameerror" className="text-center text-danger" />
                    </div>
                    <div className="mb-3 row">
                      <label htmlFor="horizontalInput1" className="col-sm-3 col-form-label">Frequency<span className="text-danger">*</span></label>
                      <div className="col-sm-9">
                        <select className="form-control " name="frequency" id="frequency" onkeyup="validateEmail(this.value)" required value={frequency} onChange={(e) => { setFrequency(e.target.value) }}>
                          <option value className="text-muted">    --- Select ---   </option>
                          <option value="daily">Daily</option>
                          <option value="weekly">Weekly</option>
                        </select>
                      </div>
                      <span id="frequencyerror" className="text-center text-danger" />
                    </div>
                    <div className="mb-3 row">
                      <label htmlFor="horizontalInput1" className="col-sm-3 col-form-label">Report Type <span className="text-danger">*</span></label>
                      <div className="col-sm-9">
                        <select className="form-control " name="reporttype" id="reporttype" required value={reporttype} onChange={(e) => { setReporttype(e.target.value) }}>
                          <option value className="text-muted">    --- Select ---   </option>
                          <option value="New Ticket">New Ticket</option>
                          {/*<option value="weekly">Weekly</option>*/}
                        </select>
                      </div>
                      <span id="reporttypeerror" className="text-center text-danger" />
                    </div>
                    <div className="mb-3 row">
                      <label htmlFor="horizontalInput1" className="col-sm-3 col-form-label">Status<span className="text-danger">*</span></label>
                      <div className="col-sm-9">
                        <select className="form-control " name="status" id="status" required value={status} onChange={(e) => { setStatus(e.target.value) }}>
                          <option value className="text-muted">    --- Select ---   </option>
                          <option value={1}>Active</option>
                          <option value={0}>Inactive</option>
                        </select>
                      </div>
                      <span id="statuserror" className="text-center text-danger" />
                    </div>
                    <div className="row">
                      <div className="col-sm-10 ms-auto">
                      </div>
                    </div>
                  </form>
                </div>
                <div className="modal-footer">
                  <button type="submit" name='submit' id='adminformbutton' className="w-btn w-btn-blue submitfunction" onClick={() => { saveData(); handleClose(); window.location.reload(false); }}>Submit</button>
                </div>



          </Modal.Body>

        </Modal>

      </div> </div>
  )
}

export default AddSubscriptionModel
