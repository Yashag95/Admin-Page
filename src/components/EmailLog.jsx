import React, { useEffect, useState } from 'react'
import DataTable from 'react-data-table-component';
import axios from 'axios';

// import AuthLogTable from './AuthLogTable'

const EmailLog = () => {
  const [search, setSearch] = useState("");
  const [users, setUsers] = useState([]);
  const [filterUsers, setFilterUsers] = useState([]);


  const getUsers = async () => {
    try {
      const response = await axios.get("http://localhost:5000/emaillog")
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
      selector: (Id) => Id.id,
      sortable: true,
      width: "100px"
    },
    {
      name: " Date & Time",
      selector: (Id) => Id.datetime,
      sortable: true,
      width: "190px"
    },
    {
      name: "Client IP",
      selector: (Id) => Id.client_ip,
      width: "170px"
    },
    {
      name: "Sender Email ",
      selector: (Id) => Id.sended_emailId,
      sortable: true,
      width: "210px"
    },
    {
      name: "CC Email",
      selector: (Id) => Id.cc_emailId,
      sortable: true
    },
    {
      name: "Email Subject",
      selector: (Id) => Id.email_subject
    },]

  useEffect(() => {
    getUsers();
  }, [])
  useEffect(() => {
    const result = users.filter(user => {
      return users.userEmail.toLowerCase.match(search.toLowerCase());
    });
    setFilterUsers(result);
  }, [search])

  return (
    <div>
      <div class="card-header">
        <h4 className="card-title">Email Log List Table </h4>
      </div>

      <DataTable columns={columns} data={filterUsers} pagination fixedHeader
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
  )
}

export default EmailLog
