import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { TextField } from '@material-ui/core';

export default function AddCustomer(props) {

    const [open, setOpen] = React.useState(false);
    const [customer, setCustomer] = React.useState({
        firstname: '',
        lastname: '',
        streetaddress: '',
        postcode: '',
        city: '',
        email: '',
        phone: '',
    });

    const handleClickOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    };

    const inputChanged =(event)=> {
        setCustomer({...customer, [event.target.name]:event.target.value})

    }


    const handleSave =()=> {
        
        props.newCustomer(customer);
        handleClose();
    }
  
    return (
        <div>
          <Button variant="outlined" color="primary" onClick={handleClickOpen}>
            Add a New Customer
          </Button>
          <Dialog
            open={open}
            onClose={handleClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
          >
            <DialogTitle id="alert-dialog-title">Add New Customer</DialogTitle>
            <DialogContent>
                
                <TextField
                autoFocus
                name ="firstname"
                value={customer.firstname}
                onChange={inputChanged}
                margin="dense"
                label="Firstname"
                fullWidth
                />
                <TextField
                name ="lastname"
                value={customer.lastname}
                onChange={inputChanged}
                margin="dense"
                label="Lastname"
                fullWidth
                />
                <TextField
                name ="streetaddress"
                value={customer.streetaddress}
                onChange={inputChanged}
                margin="dense"
                label="Street Address"
                fullWidth
                />
                <TextField
                name ="postcode"
                value={customer.postcode}
                onChange={inputChanged}
                margin="dense"
                label="Postcode"
                fullWidth
                />
                <TextField
                name ="city"
                value={customer.city}
                onChange={inputChanged}
                margin="dense"
                label="City"
                fullWidth
                />
                <TextField
                name ="email"
                value={customer.email}
                onChange={inputChanged}
                margin="dense"
                label="Email"
                fullWidth
                />
                 <TextField
                name ="phone"
                value={customer.phone}
                onChange={inputChanged}
                margin="dense"
                label="Phone"
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