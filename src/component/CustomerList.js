import React, { useEffect, useState } from 'react';
import {AgGridColumn, AgGridReact} from 'ag-grid-react';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-material.css'

export default function CustomerList() {
    const [customers, setCustomers] = useState([]);

    useEffect(()=> {
        getCustomer();
    },[])

    const columns = [
        {headerName: 'Firstname', field:'firstname', sortable: true, floatingFilter: true,filter:true},
        {headerName: 'Lastname', field:'lastname', sortable: true,floatingFilter: true, filter: true},
        {headerName: 'Street addresss', field:'streetaddresss', sortable: true,floatingFilter: true, filter: true},
        {headerName: 'Postcode', field:'postcode', sortable: true, floatingFilter: true,filter: true},
        {headerName: 'City', field:'city', sortable: true, floatingFilter: true,filter: true},
        {headerName: 'Email', field:'email', sortable: true,floatingFilter: true, filter: true},
        {headerName: 'Phone', field:'phone', sortable: true, floatingFilter: true,filter: true},

    ]
    const getCustomer = ()=> {
        fetch("https://customerrest.herokuapp.com/api/customers")
        .then(response => response.json())
        .then(data => setCustomers(data.content))
        .catch(error => console.log(error))
    }
    return (
      <div className="ag-theme-material" style={{height:'600px', width:'80%', margin: 'auto'}}>
        <AgGridReact
            columnDefs = {columns}
            rowData={customers}
            pagination={true}
            paginationPageSize={10}
        >      
        </AgGridReact>  
      </div>  
    );

}