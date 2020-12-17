import React, { useEffect, useState, useRef} from 'react';
import {AgGridColumn, AgGridReact} from 'ag-grid-react';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-material.css'
import Button from '@material-ui/core/Button';
import { Snackbar } from '@material-ui/core';
import AddCustomer from './AddCustomer';
import ModifyCustomer from './ModifyCustomer';
import {BsXCircle} from 'react-icons/bs';
import AddTraining from './AddTraining';

export default function CustomerList() {
    const [customers, setCustomers] = useState([]);
    const [isOpen, setIsOpen] = useState(false);
    const [message, setMessage] = useState('');
    const gridRef = useRef();
    const customerDataApi = "https://customerrest.herokuapp.com/api/customers";
    useEffect(()=> {
        getCustomer();
        
    },[]);

    const getCustomer = ()=> {
        fetch(customerDataApi)
        .then(response => response.json())
        .then(data => setCustomers(data.content))
        .catch(error => console.log(error))
    }
    const newCustomer = (newCustomer) => {
        fetch(customerDataApi,{
            method: 'POST',
            headers: {'Content-Type' : 'application/json'},
            body: JSON.stringify(newCustomer)
        })
        .then(_ => getCustomer())
        .then(_ => {
            setMessage('New Customer added successfully')
            setIsOpen(true)
        })
        .catch(error => console.log(error))
    }

    const modifyCustomer = (link, customer) => {
        fetch(link, {
            method:'PUT',
            headers: {'Content-type': 'application/json'},
            body:JSON.stringify(customer)
        })
            .then(_ => getCustomer())
            .then(_ => {
                setMessage(' Customer data modified successfully')
                setIsOpen(true)
            })
            .catch(err => console.error(err))
    }

    const deleteCustomer = (deleteLink) => {
        if(window.confirm('Are you sure?')){
            fetch(deleteLink, {
                method:'DELETE' 
             })
             .then(_ => getCustomer())
             .then(_ => {
                 setMessage('Customer removed successfully')
                 setIsOpen(true)
             })
             .catch(error => console.log(error)) 
        }       
    }

    const addTraining = (addTraining) => {
        fetch('https://customerrest.herokuapp.com/api/trainings', {
            method: 'POST',
            headers: {'Content-type' : 'application/json'},
            body: JSON.stringify({
                "date": addTraining.date,
                "activity": addTraining.activity,
                "duration": addTraining.duration,
                "customer": addTraining.customer
            })
        })
        .then(_ => setMessage('Training added!'))
        .then(_ => setIsOpen(true))
        .catch(error => console.error(error))
    }

    const handleClose = () => {
        setIsOpen(false);
    }

    const columns = [
        {headerName: 'Firstname', field:'firstname', sortable: true, floatingFilter: true,filter:true, checkboxSelection:true},
        {headerName: 'Lastname', field:'lastname', sortable: true,floatingFilter: true, filter: true},
        {headerName: 'Street addresss', field:'streetaddress', sortable: true,floatingFilter: true, filter: true},
        {headerName: 'Postcode', field:'postcode', sortable: true, floatingFilter: true,filter: true},
        {headerName: 'City', field:'city', sortable: true, floatingFilter: true,filter: true},
        {headerName: 'Email', field:'email', sortable: true,floatingFilter: true, filter: true},
        {headerName: 'Phone', field:'phone', sortable: true, floatingFilter: true,filter: true},
        {
            headerName: '',
            width: 100,            
            field: 'content',
            cellRendererFramework: params =>    <AddTraining 
                                                    addTraining={addTraining} 
                                                    params={params}/>
      },
        {
            headerName: '', 
            width:100,
            field:'links[1].href', 
            cellRendererFramework: params => <ModifyCustomer updateCustomer={modifyCustomer} params={params} />
            },
       
       
        {
            headerName: '', 
            field:'links[1].href',
            width: 100,
            cellRendererFramework: params => <Button 
                                            color="secondary" 
                                            size="medium" 
                                            onClick={()=>deleteCustomer(params.data.links[0].href)}
                                            > <BsXCircle />
                                            </Button>
            },
            
    ]
    
    return (
        <div>
            <div style={{marginLeft:'700px'}}>
             <AddCustomer newCustomer={newCustomer} />
            </div>
            <div className="ag-theme-material" style={{height:'600px', width:'70%', margin: 'auto'}}>
                <AgGridReact
                    ref={gridRef}
                    onGridReady={params => {
                        gridRef.current = params.api;
                        
                        
                    }}
                    columnDefs = {columns}
                    rowData={customers}
                    pagination={true}
                    paginationPageSize={10}
                   
                >      
                </AgGridReact>  
                <Snackbar
                    open={isOpen}
                    autoHideDuration={6000}
                    onClose={handleClose}
                    message={message}
                />
            </div> 
      </div> 
    );

}