import React, { useState, useEffect, useRef } from 'react';

import {AgGridColumn, AgGridReact} from 'ag-grid-react';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-material.css'
import AddTraining from './AddTraining';
import { Snackbar } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import {BsXCircle} from 'react-icons/bs'

import moment from 'moment';

export default function Trainingslist  (props) {
    const [trainings, setTrainings] = useState([]);
    const [isOpen, setIsOpen] = useState(false);
    const [message, setMessage] = useState('');
    

    useEffect(() => {
        getTrainings();
    }, [])

    const gridRef = useRef();

    const getTrainings = () => {
        fetch('https://customerrest.herokuapp.com/gettrainings')
        .then(response => response.json())
        .then(data => setTrainings(data))
        .catch(err => console.error(err))
    }

    const deleteTrainings = (id) => {
        console.log(id);
        if(window.confirm('You want to DELET the Training?')){
            fetch('https://customerrest.herokuapp.com/api/trainings/' + id, {
                method: 'DELETE'
            })
            .then(_ => getTrainings())
            .then(_ => {
                setMessage('Training has been succesfully deleted')
                setIsOpen(true)
            })
            .catch(err => console.error(err))
        } 
    }

    const columns = [
        {
            headerName: '', 
            field:'id',
            width: 100,
            cellRendererFramework: params => <Button 
                                            color="secondary" 
                                            size="medium" 
                                            onClick={ ()=> deleteTrainings(params.value)}
                                            > <BsXCircle />
                                            </Button>
            },
        

        {   headerName: 'Activity', field: 'activity', sortable: true, floatingFilter: true,filter: true,  resizable: true   },

        {   headerName: 'Date', field: 'date', cellRendererFramework: params => moment.utc(params).format('DD.MM.YYYY hh:mm a')},
              
        {headerName: 'Duration', field:'duration', sortable: true, floatingFilter: true,filter: true},
        {
            headerName: 'Customer',     
            cellRendererFramework: params => (params.data.customer.firstname + " " + params.data.customer.lastname),                
            sortable: true, 
            floatingFilter: true, 
            filter: true,             
            resizable: true
        },
       
    ]

    const handleClose = () => {
        setIsOpen(false);
    }

    return(
        <div>
            {/* <AddCustomer addCustomer={addCustomer}/> */}
            <div className="ag-theme-material" style={{height:'600px', width:'70%', margin: 'auto '}}>
                <AgGridReact
                    ref={gridRef}
                    onGridReady={ params => {
                        gridRef.current = params.api
                        params.api.sizeColumnsToFit();
                    }}
                    columnDefs={columns}
                    suppressCellSelection={true}
                    rowData={trainings}
                    pagination={true}
                    paginationPageSize={10}
                >
                </AgGridReact>
                <Snackbar
                    open={isOpen}
                    autoHideDuration={3000}
                    onClose={handleClose}
                    message={message}
                />
            </div>
        </div>
    )
}
