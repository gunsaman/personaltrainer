import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import { TextField } from '@material-ui/core';
import * as IoIcons from 'react-icons/io';

export default function ModifyCustomer(props) {

    const [open, setOpen] = React.useState(false);
    const [customer, setCustomer] = React.useState({
        firstname:'', 
        lastname:'', 
        streetaddress:'', 
        postcode:'',
        city:'',
        email:'',
        phone:'',
        
    });

    const handleClickOpen = () => {
        console.log(props.params)
         setCustomer({
            firstname: props.params.data.firstname,
            lastname: props.params.data.lastname,
            streetaddress: props.params.data.streetaddress,
            postcode: props.params.data.postcode,
            city: props.params.data.city,
            email: props.params.data.email,
            phone: props.params.data.phone
        }) 
         setOpen(true);
    };
  
    const handleClose = () => {
         setOpen(false);
    };

    const inputChanged =(event)=> {
        setCustomer({...customer, [event.target.name]:event.target.value})

    }


    const updateCustomer =()=> {        
        props.updateCustomer(props.params.data.links[0].href, customer);
        handleClose();
    }
  
    return (
        <div>
          <Button size="small"  color="primary" onClick={handleClickOpen}>
            Edit
          </Button>
          <Dialog
            open={open}
            onClose={handleClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
          >
            <DialogTitle id="alert-dialog-title">Edit Customer</DialogTitle>
            <DialogContent>
                <TextField
                autoFocus
                name ="firstname"
                value={customer.firstname}
                onChange={inputChanged}
                margin="dense"
                label="firstname"
                fullWidth
                />
                <TextField
                name ="lastname"
                value={customer.lastname}
                onChange={inputChanged}
                margin="dense"
                label="lastname"
                fullWidth
                />
                <TextField
                name ="streetaddress"
                value={customer.streetaddress}
                onChange={inputChanged}
                margin="dense"
                label="streetaddress"
                fullWidth
                />
                <TextField
                name ="postcode"
                value={customer.postcode}
                onChange={inputChanged}
                margin="dense"
                label="postcode"
                fullWidth
                />
                <TextField
                name ="city"
                value={customer.city}
                onChange={inputChanged}
                margin="dense"
                label="city"
                fullWidth
                />
                <TextField
                name ="email"
                value={customer.email}
                onChange={inputChanged}
                margin="dense"
                label="email"
                fullWidth
                />
                <TextField
                name ="phone"
                value={customer.phone}
                onChange={inputChanged}
                margin="dense"
                label="phone"
                fullWidth
                />
            </DialogContent>
            <DialogActions>
              <Button onClick={handleClose} color="primary">
                Disagree
              </Button>
              <Button onClick={updateCustomer} color="primary" autoFocus>
                Agree
              </Button>
            </DialogActions>
          </Dialog>
        </div>
      );
}