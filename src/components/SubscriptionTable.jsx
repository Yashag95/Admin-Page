import axios from 'axios';
import React, { useEffect, useState,useContext } from 'react'
import DataTable from 'react-data-table-component';
import AddSubscriptionModel from './AddSubscriptionModel';
import { Modal} from 'react-bootstrap';
import { updatedata } from './ContextProvider';
import { useNavigate } from 'react-router-dom'

const SubscriptionTable = () => {

    const {updata, setUPdata} = useContext(updatedata)
    const [search, setSearch] = useState("");
    const [users, setUsers] = useState([]);
    const [filterUsers, setFilterUsers] = useState([]);
    const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const [consumer, setConsumer] = useState([]);
  const navigate = useNavigate("");
  const handleShow = (e) => {
    console.log(e.target.id)
    // fetchadmin(e.target.id)
    fetchata(e.target.id)
    setShow(true);
  }
  const [user, setUser] = useState({
    email: "",
    username:"",
    frequency:"",
    reporttype: "",
    status: ""
  })

  const handleChange = e =>{
    
    const {name,value} = e.target
    setUser((user) => {
      return {
          ...user,
          [name]: value
      }
  })
}

    const getUsers = async () => {
        try {
            const response = await axios.get("http://localhost:5000/view_report")
            setUsers(response.data)
            setFilterUsers(response.data)
        }
        catch (error) {
            console.log(error);
        }
    }

    const submitDelete = (Id) => {

        axios({
          method: "DELETE",
          url: "http://localhost:5000/delete_viewreport",
          data: Id
        }).then((res) => {
          if (res.body.status === 'success') {
            alert("Admin deleted successfully")
          }
        })
      }

      const submitupdate = (Id) => {
        const {email,username,frequency,reporttype,status} = user;
        axios({
          method: "PUT", 
          url:`http://localhost:5000/update-subs/${Id}`, 
          data: user
        }).then((res)=>{
          const data2 = res.json();
            console.log(data2);
    
            if(res.status === 422 || !data2){
                alert("fill the data");
            }else{
                navigate.push("/")
                setUPdata(data2);
            }
          
          
        })
        
         
      }

      const fetchata = async (d) => {

        const response = await fetch(`http://localhost:5000/susc_list/${d}`);
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


    const columns = [
        {
            name: "S.No",
            selector: (Id) => Id.id,
            sortable: true
        },
        {
            name: " Email",
            selector: (Id) => Id.email,
            sortable: true
        },
        {
            name: "Username",
            selector: (Id) => Id.username
        },
        {
            name: "Frequency",
            selector: (Id) => Id.frequency,
            sortable: true
        },
        {
            name: "Report Type",
            selector: (Id) => Id.reporttype,
            sortable: true
        },
        {
            name: "Status",
            selector: (Id) => <h6 style={{color: "#0095ff"}}> {Id.status ? ('Active') : <h6 style={{color: "red"}}>Inactive</h6>} </h6>
        },
        {
            name: "Action",
            selector: (Id)=> [(<i className="fas fa-edit btn btn-blue btn-sm" id = {(Id.id)} onClick={handleShow} ></i>),<i> </i> , (<i className="  fas fa-trash-alt btn btn-danger btn-sm" onClick={() => {
                const confirmBox = window.confirm(
                  "Do you really want to delete this record ?"
                )
                if (confirmBox === true) {
                  submitDelete(Id)
                }
              }}> </i>)]
        }
    ];

    useEffect(() => {
        getUsers();
    }, [])


    return (
        <div>
        <div className='table-box'>
        <AddSubscriptionModel/>
            <DataTable title="Subscription List" columns={columns} data={filterUsers} pagination fixedHeader
                fixedHeaderScrollHeight='600px'
                highlightOnHover
                subHeader
                searching
                subHeaderComponent={ <input type='text' placeholder='Search' className='w-25 form-control'
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                />}
            />   
            

        </div>
        <div className="modal-dialog modal-dialog-centered modal-lg">
        {
            consumer.map((Id, key) =>
            <div key={key}>
            <div className="row" ></div>
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
            {/* <div className="modal-dialog" role="document">
              <div className="modal-content"> */}

                <div className="modal-body">
                  <form method="post" id="ajaxsubscription">
                    <div className="mb-3 row">
                      <input type="hidden" name="userhiddentoken" id="userhiddentoken" defaultValue="63d8aaccd0325" />
                      <input type="hidden" name="type" defaultValue="Addsubscription" />
                      <label htmlFor="horizontalInput1" className="col-sm-3 col-form-label">Email <span className="text-danger">*</span></label>
                      <div className="col-sm-9">
                        <input type="email" className="form-control" id="email" name="email" required placeholder="Enter Email" defaultValue={Id.email} onChange={ handleChange }  />
                      </div>
                      <span id="emailerror" className="text-center text-danger" />
                    </div>
                    <div className="mb-3 row">
                      <label htmlFor="horizontalInput1" className="col-sm-3 col-form-label">User Name <span className="text-danger">*</span></label>
                      <div className="col-sm-9">
                        <input type="text" className="form-control" id="username" name="username" required placeholder="Enter Username" defaultValue={Id.username} onChange={ handleChange } />
                      </div>
                      <span id="usernameerror" className="text-center text-danger" />
                    </div>
                    <div className="mb-3 row">
                      <label htmlFor="horizontalInput1" className="col-sm-3 col-form-label">Frequency<span className="text-danger">*</span></label>
                      <div className="col-sm-9">
                        <select className="form-control " name="frequency" id="frequency" onkeyup="validateEmail(this.value)" required defaultValue={Id.frequency} onChange={ handleChange }>
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
                        <select className="form-control " name="reporttype" id="reporttype" required defaultValue={Id.reporttype} onChange={ handleChange }>
                          <option value className="text-muted">    --- Select ---   </option>
                          <option value="New Ticket">New Ticket</option>
                          <option value="weekly">Weekly</option>
                        </select>
                      </div>
                      <span id="reporttypeerror" className="text-center text-danger" />
                    </div>
                    <div className="mb-3 row">
                      <label htmlFor="horizontalInput1" className="col-sm-3 col-form-label">Status<span className="text-danger">*</span></label>
                      <div className="col-sm-9">
                        <select className="form-control " name="status" id="status" required defaultValue={Id.status} onChange={ handleChange } >
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
                  <button type="submit" name='submit' id='adminformbutton' className="w-btn w-btn-blue submitfunction" onClick={() => {submitupdate(Id.id); handleClose();}}>Update</button>
                </div>
              {/* </div>
            </div> */}


          </Modal.Body>
          <Modal.Footer>

          </Modal.Footer>
        </Modal>

      </div>
       )}
       {/* Model Box Finsihs */}
       </div>  
      </div>
    )
}

export default SubscriptionTable