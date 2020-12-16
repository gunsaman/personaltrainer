import React, { useEffect, useState } from 'react';
import {AgGridColumn, AgGridReact} from 'ag-grid-react';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-material.css'

export default function CustomerList() {
    const [trainings, setTrainings] = useState([]);

    useEffect(()=> {
        getTraining();
    },[])

    const columns = [
        {headerName: 'Date', field:'date', sortable: true,floatingFilter: true, filter: true},
        {headerName: 'Duration', field:'duration', sortable: true, floatingFilter: true,filter: true},
        {headerName: 'Activity', field:'activity', sortable: true, floatingFilter: true,filter: true},
        

    ]
    const getTraining = ()=> {
        fetch("https://customerrest.herokuapp.com/api/trainings")
        .then(response => response.json())
        .then(data => setTrainings(data.content))
        .catch(error => console.log(error))
    }
    return (
      <div className="ag-theme-material" style={{height:'600px', width:'30%', margin: 'auto'}}>
        <AgGridReact
            columnDefs = {columns}
            rowData={trainings}
            pagination={true}
            paginationPageSize={10}
        >      
        </AgGridReact>  
      </div>  
    );

}