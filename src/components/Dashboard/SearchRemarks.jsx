import React, { useState } from 'react'
import { Modal } from 'react-bootstrap';
// import axios from 'axios';

const SearchRemarks = (props) => {

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const [consumer, setConsumer] = useState([]);
    const handleShow = (e) => {
        console.log(e.target.id)
        fetchdata(e.target.id)
        setShow(true);
    }

    const fetchdata = async (d) => {

        const response = await fetch(`http://localhost:5000/ticket-history/${d}`);
        const data = await response.json();

        setConsumer(data)
    }

    return (
        <div style={{ width: "100px" }} >

            <div >{props.remarkbyadmin}
                <span style={{ position: "absolute", right: "35px", cursor: "pointer" }}> <i className="fa fa-search" aria-hidden="true" id={(props.id)} data-bs-toggle="modal" data-bs-target="#historyModa" onClick={handleShow} ></i>  </span>
            </div>

            <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
            >
                <Modal.Header closeButton>
                    <Modal.Title>
                        Ticket {props.ticketnumber}
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>

                    <div className="modal-body" >
                        <div className="row">
                            <ul className="table-list list-unstyled table table-borderd" >
                                <li className="d-flex" >
                                    <div className="w-20 col-md-4" ><span className="text-ticket"> Date</span></div>
                                    <div className="word-break col-md-5">Remarks</div>
                                    <div className="word-break col-md-4">Name/Email</div>
                                </li>

                                {consumer.map((e, index) => {
                                    return (
                                        <div key={index}>

                                            <li className="d-flex">
                                                <div className="w-20 col-md-4"><span className="text-ticket">{e.created_at}</span></div>
                                                <div className="word-break col-md-5">{e.message}</div>
                                                <div className="word-break col-md-4">off54-del@supportgov.in </div>
                                            </li>

                                            {/* <hr /> */}
                                        </div>
                                    );
                                })}

                            </ul>
                        </div>
                    </div>
                    <div className="modal-footer">
                        <button className=" w-btn w-btn-blue" type="submit" data-bs-toggle="modal" data-bs-target="#myModal4" onClick={handleClose}>back</button>
                    </div>

               </Modal.Body>
                {/* <Modal.Footer>
                </Modal.Footer> */}
            </Modal>

        </div>
    )
}

export default SearchRemarks