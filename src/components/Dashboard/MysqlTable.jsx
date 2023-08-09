import { Button } from 'antd';
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import DataTable from 'react-data-table-component';
import { Modal } from 'react-bootstrap';
import SearchRemarks from './SearchRemarks';
import { Link } from 'react-router-dom';


const MysqlTable = () => {
  const [search, setSearch] = useState("");
  const [users, setUsers] = useState([]);
  const [filterUsers, setFilterUsers] = useState([]);
  const [consumer, setConsumer] = useState([]);
  const [user, setUser] = useState({
    remarkByAdmin: ""
  })
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = (e) => {
    // console.log(e.target.id)
    
    fetchata(e.target.id)
    setShow(true);

  }
  const handleChange = e =>{
    
    const {name,value} = e.target
    setUser({
      ...user,
      [name]: value
    })
  }

  const fetchata = async (d) => {

    const response = await fetch(`http://localhost:5000/eye-data/${d}`);
    const data = await response.json();

    setConsumer(data)
  }


  const submitLock = (Id) => {

    axios({
      method: "PUT",
      url: "http://localhost:5000/lockchange",
      data: Id
    }).then((res) => {
      if (res.body.status === 'success') {
        alert("Status changed successfully")

      }
    })
  }
  const updateremark = (Id) => {
    
    axios({
      method: "PUT", 
      url:`http://localhost:5000/add_remark/${Id}`, 
      data:  user
    }).then((res)=>{
      if (res.body.status === 'success'){
          alert("Admin added successfully")
        
    }   
    }) 
  }

  const getUsers = async () => {
    try {
      const response = await axios.get("http://localhost:5000/")
      setUsers(response.data)
      setFilterUsers(response.data)
    }
    catch (error) {
      console.log(error);
    }
  }


  const columns = [
    {
      name: "S.No",
      selector: (Id) => Id.TID,
      sortable: true,
      width : "100px",
      // maxWidth: 70,
    },
    {
      name: " Ticket No.",
      selector: (Id) => Id.TicketNumber,
      sortable: true,
      width: "170px"
    },
    {
      name: "Owner",
      selector: (Id) => Id.userEmail
      // width: "220px"
    },
    {
      name: "Date",
      selector: (Id) =>  Id.Date,
      sortable: true,
      width: "120px"
    },
    {
      name: "Time",
      selector: (Id) => Id.Time,
      sortable: true,
      width: "110px"
    },
    {
      name: "Domain",
      selector: (Id) => Id.Domain,
      width: "160px"
    },
    {
      name: "View",
      selector: (Id) => <Button id={(Id.TID)} className='fa fa-eye text-success' onClick={handleShow}></Button>,
      width: "110px"

    },
    {
      name: "Status",
      selector: (Id) => <Button className={Id.status ? ('fas fa-lock-open') : ('fas fa-lock')} onClick={() => {
        const confirmBox = window.confirm(
          (Id.status ? "Do you want to lock the ticket?" : "Do you want to re-open the ticket?")
        )
        if (confirmBox === true) {
          submitLock(Id)
        }
      }}  ></Button>,
      width: "110px"
    }
  ];

  useEffect(() => {
    getUsers();
  }, [])

  useEffect(() => {
    const result = users.filter((user) => {
      return (
        user.TicketNumber.toLowerCase().match(search.toLowerCase()) || 
        user.userEmail.toLowerCase().match(search.toLowerCase())  ||
        user.Date.toLowerCase().match(search.toLowerCase()) ||
        user.Time.toLowerCase().match(search.toLowerCase()) ||
        user.Domain.toLowerCase().match(search.toLowerCase()) 

        
      )
    });
    setFilterUsers(result);
  }, [search])

  const [openticket, setTotalOpenTicket] = useState([]);
  useEffect(() => {
    const fetchOpenTickets = async () => {
      try {
        const res = await axios.get("http://localhost:5000/open_ticket");
        setTotalOpenTicket(res.data);
      } catch (err) {
        console.log(err);
      }
    }
    fetchOpenTickets()
  }, [])


  const [closeticket, setTotalCloseTicket] = useState([]);
  useEffect(() => {
    const fetchCloseTickets = async () => {
      try {
        const res = await axios.get("http://localhost:5000/close_ticket");
        setTotalCloseTicket(res.data);
      } catch (err) {
        console.log(err);
      }
    }
    fetchCloseTickets()
  }, [])



  return (
    //cards----------------------               
    <div>
      <div>
        {/* <button onclick></button> */}
        <div className="col-lg-12 col-sm-12 m-auto" style={{ padding: "15px", textDecoration: "none" }}>
          <div className="row justify-content-center">
            <div className="col-lg-4">
              <div className="card card-inverse token">
                <div className="card-block">
                  <div className="rotate">
                    <img src="assets/images/total-ticket-open.png" className="img-fluid" alt='logo' />
                  </div>
                  <h5 className="text-center fw-bold ticket-text">TOTAL TICKET</h5>
                  <h1 className="display-4 text-warning">{filterUsers.length}</h1>
                </div>

              </div>
            </div>

            <div className="col-lg-4" >
            <Link to="/OpenTicketPage" style={{textDecoration: "none"}}>
              <div className="card card-inverse  token">
                <input type="hidden" id="inputfilterdata" value="1" />
                <div className="card-block">
                  <div className="rotate">
                    <img src="assets/images/ticket-open.png" className="img-fluid" alt="logo" />
                  </div>
                  <h5 className="text-center fw-bold ticket-text">OPEN TICKET</h5>
                  {openticket.map(openticket => (
                    <h1 class="display-4 text-success">{openticket.rows}</h1>
                  ))}
                </div>
              </div>
              </Link>
            </div>

            <div className="col-lg-4">
            <Link to="/CloseTicketPage" style={{textDecoration : "none"}}>
              <div className="card card-inverse  token">
                <input type="hidden" id="inputfilterdata1" value="0" />
                <div className="card-block">
                  <div className="rotate">
                    <img src="assets/images/ticket-open-close.png" className="img-fluid" alt='logo' />
                  </div>
                  <h5 className="text-center fw-bold ticket-text">CLOSE TICKET</h5>
                  {closeticket.map(closeticket => (
                    <h1 class="display-4 text-danger">{closeticket.rows}</h1>
                  ))}
                </div>

              </div>
              </Link>
            </div>
            
          </div>
          
        </div>
      </div>


      {/* datatable-------------- */}

      <div className='table-box' style={{margin: "10px"}}>
        <DataTable title="Ticket Details" columns={columns} data={filterUsers} pagination fixedHeader
          fixedHeaderScrollHeight='600px' 
          highlightOnHover
          subHeader
          searching
          subHeaderComponent={<input type='text' placeholder='Search' className='w-25 form-control'
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            
          />}
        />
      </div>
      {/* model start */}
      <div className="modal-dialog modal-dialog-centered modal-lg" >
      {
              consumer.map((Id, key) =>
                <div key={key} >
        <Modal
          show={show}
          onHide={handleClose}
          backdrop="static"
          keyboard={false}

        >
          <Modal.Header closeButton>
            <Modal.Title >Ticket Detail</Modal.Title>
          </Modal.Header>
          <Modal.Body>

           
                  <div className="row" >
                    <div className="col-md-12 text-center" style={{float: "right", margin: "0px 17px 0px 18rem"}}>
                      <Button className="w-btn w-btn-warning w-btn-sm"  onClick={() => {
                        const confirmBox = window.confirm(
                          (Id.status ? "Do you want to lock the ticket?" : "Do you want to re-open the ticket?")
                        )
                        if (confirmBox === true) {
                          submitLock(Id)
                        }
                      }}  >{(Id.status ? "close ticket" : "Re-open ticket")}</Button>
                      {/* <input onclick="updfunction(211)" type="submit" name="update_ticket_status" value="Re-open Ticket" className="w-btn w-btn-warning w-btn-sm" /> */}
                    </div>
                  </div>

                  <div className="modal-body">
                    <div className="row">
                      <ul className="table-list list-unstyled table table-borderd">
                        <li className="d-flex">
                          <div className="w-20 col-md-4"><span className="text-ticket"> Ticket No</span></div>

                          <input type="hidden" value="211" id="ticket_id211" name="ticketid" />
                          <div className="word-break col-md-12"><strong >{Id.TicketNumber}</strong></div>
                        </li>
                        <li className="d-flex">
                          <div className="w-20 col-md-4"><span className="text-ticket"> Owner</span></div>
                          <div className="word-break col-md-8">{Id.userEmail}</div>
                        </li>
                        <li className="d-flex">
                          <div className="w-20 col-md-4"><span className="text-ticket"> Domain </span></div>
                          <div className="word-break col-md-8">{Id.Domain} </div>
                        </li>
                        <li className="d-flex">
                          <div className="w-20 col-md-4"> <span className="text-ticket"> IP address </span></div>
                          <div className="word-break col-md-8">{Id.UserIP} </div>
                        </li>
                        <li className="d-flex">
                          <div className="w-20 col-md-4"> <span className="text-ticket"> Date </span></div>
                          <div className="word-break col-md-8">{Id.Date}</div>
                        </li>
                        <li className="d-flex">
                          <div className="w-20 col-md-4"> <span className="text-ticket"> Time </span></div>
                          <div className="word-break col-md-8">{Id.Time} </div>
                        </li>
                        <li className="d-flex">
                          <div className="w-20 col-md-4"> <span className="text-ticket"> Url </span></div>
                          <div className="word-break col-md-8 "><span className="text-primary p-0">{Id.URL}</span></div>
                        </li>
                        <li className="d-flex">
                          <div className="w-20 col-md-4"> <span className="text-ticket"> Owner Query</span></div>
                          <div className="word-break col-md-8">https://10.197.52.144/ </div>
                        </li>
                        <li className="d-flex">
                          <div className="w-20 col-md-4"> <span className="text-ticket"> Customer Remarks</span></div>
                          <div className="word-break col-md-8">{Id.Remark}</div>
                        </li>
                        <li className="d-flex">
                          <div className="w-20 col-md-4"> <span className="text-ticket">Support Remarks </span></div>

                          <SearchRemarks id={Id.TID}  ticketnumber= {Id.TicketNumber} remarkbyadmin= {Id.remarkByAdmin}  />
                          
                        </li>
                        <li className="d-flex">
                          <div className="w-20 col-md-4"> <span className="text-ticket"> Remarks </span></div>
                          <div className="word-break col-md-8">
                            <textarea maxlength="150" id="211remark" data-adminremark="test" name="remarkByAdmin" className="form-control remark2" value={user.message} onChange={ handleChange } ></textarea>
                          </div>
                        </li>
                        <span id='remarkerror' className='text-center text-danger col-md-12' style={{ float: "right" }}></span>
                        <div className="spicjed" style={{ float: "right" }}></div>
                      </ul>
                    </div>
                  </div> 
          </Modal.Body>

          <Modal.Footer>
            <Button className='w-btn w-btn-danger' variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button type="button" className=" w-btn w-btn-blue save_changesId" name="submit" onClick={()=>{updateremark(Id.TID); handleClose();}}>Save changes</Button>
          </Modal.Footer>
        </Modal>
        </div>)}
        {/* Model Box Finsihs */}
      </div>




    </div>

  )
}

export default MysqlTable