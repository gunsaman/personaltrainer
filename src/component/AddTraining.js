import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import {BsFillPlusCircleFill} from 'react-icons/bs';

import { TextField } from '@material-ui/core';

export default function AddTraining(props) {

    const [isOpen, setIsOpen] = React.useState(false);
    const [training, setTraining] = React.useState({
        date: '',
        activity: '',
        customer: props.params.value,
        duration: '',
        });

    const handleClickOpen = () => {
        setTraining({
            date: '',
            duration: '',
            activity: '',
            customer: props.params.data.links[1].href,
        })
      setIsOpen(true);

    };
  
    const handleClose = () => {
      setIsOpen(false);
    };

    const inputChanged =(event)=> {
        setTraining({...training, [event.target.name]:event.target.value})

    }


    const handleSave =()=> {        
        props.addTraining(training);
        handleClose();
    }
  
    return (
        <div>
          <Button  color="primary" fontSize="small" onClick={handleClickOpen}>
            <BsFillPlusCircleFill />
          </Button>
          <Dialog
            open={isOpen}
            onClose={handleClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
          >
            <DialogTitle id="alert-dialog-title">Add New Customer</DialogTitle>
            <DialogContent>
                
                <TextField
                autoFocus
                name ="date"
                value={training.date}
                onChange={inputChanged}
                margin="dense"
                label="Date"
                fullWidth
                />
                <TextField
                name ="activity"
                value={training.activity}
                onChange={inputChanged}
                margin="dense"
                label="Activity"
                fullWidth
                />
                <TextField
                name ="customer"
                value={training.customer}
                onChange={inputChanged}
                margin="dense"
                label="Customer"
                fullWidth
                />
                <TextField
                name ="duration"
                value={training.duration}
                onChange={inputChanged}
                margin="dense"
                label="Duration"
                fullWidth
                />
                
            </DialogContent>
            <DialogActions>
              <Button onClick={handleClose} color="primary">
                Cancel
              </Button>
              <Button onClick={handleSave} color="primary" autoFocus>
                Save
              </Button>
            </DialogActions>
          </Dialog>
        </div>
      );
}