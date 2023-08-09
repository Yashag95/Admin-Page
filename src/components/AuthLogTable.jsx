import axios from 'axios';
import React, { useEffect, useState } from 'react'
import DataTable from 'react-data-table-component';
// import './Table.css';


const AuthLogTable = () => {
    const [search, setSearch] = useState("");
    const [users, setUsers] = useState([]);
    const [filterUsers, setFilterUsers] = useState([]);

    const getUsers = async () => {
        try {
            const response = await axios.get("http://localhost:5000/authlog")
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
            sortable: true
        },
        {
            name: " Email.",
            selector: (Id) => Id.email,
            sortable: true
        },
        {
            name: "IP Address",
            selector: (Id) => Id.ip
        },
        {
            name: "Action",
            selector: (Id) => Id.action,
            sortable: true
        },
        {
            name: "Description",
            selector: (Id) => Id.description,
            sortable: true
        },
        {
            name: "DateTime",
            selector: (Id) => Id.datetime
        },
    ];

    useEffect(() => {
        getUsers();
    }, [])

    useEffect(() => {
        const result = users.filter((user) => {
          return (
            // user.id.toLowerCase().match(search.toLowerCase())  ||
            user.email.toLowerCase().match(search.toLowerCase()) ||
            user.ip.toLowerCase().match(search.toLowerCase())  
            // user.Date.toLowerCase().match(search.toLowerCase()) ||
            // user.Time.toLowerCase().match(search.toLowerCase()) ||
            // user.Domain.toLowerCase().match(search.toLowerCase()) 
    
            
          )
        });
        setFilterUsers(result);
      }, [search])
    


    return (
         <div className="card">
                    <div className="card-header">
                        <h4 className="card-title">Auth Logs Table </h4>

                    </div>
                    <div className="card-body">


        
        <div className='table-box'>
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

        </div> </div></div>

    )
}

export default AuthLogTable