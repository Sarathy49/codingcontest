import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { Container ,Paper,Button} from '@material-ui/core';

import axios from 'axios';
const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));

export default function Ticket() {
  const paperStyle = { padding: '50px 20px', width: 600, margin: '20px auto',backgroundColor:"Cyan"};
  const [name, setName] = useState('');
  const [splace, setSplace] = useState('');
  const [eplace, setEplace] = useState('');
  const [tdate, setTdate] = useState('');
  const [phno, setPhno] = useState('');
  const [tickets, setTickets] = useState([]);
  const [numTickets, setNumTickets] = useState(0);
  const classes = useStyles();

  const handleClick = (e) => {
    e.preventDefault();
    const ticket = { name,splace,eplace,tdate,phno };
    console.log(ticket);
    fetch('http://localhost:8081/post', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(ticket),
    })
      .then(() => {
        console.log('New added');
        setNumTickets(numTickets + 1);
      });
  };
  const handleUpdate = (id) => {
    const ticket = tickets.find((s) => s.id === id);
    const updatedName = prompt('Enter updated name:', ticket.name);
    const updatedSplace = prompt('Enter updated splace:', ticket.splace);
    const updatedEplace = prompt('Enter updated eplace:', ticket.eplace);
    const updatedTdate = prompt('Enter updated tdate:', ticket.tdate);
    const updatedPhno = prompt('Enter updated phno:', ticket.phno);
    const updatedTicket = {
      id: ticket.id,
      name: updatedName,
      splace: updatedSplace,
      eplace: updatedEplace,
      tdate: updatedTdate,
      phno: updatedPhno
    };
    fetch('http://localhost:8081/update', {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(updatedTicket),
    })
      .then(() => {
        setNumTickets(numTickets + 1);
      });
  };
  

  const handleDelete = (id) => {
    fetch(`http://localhost:8081/del?id=${id}`, {
      method: 'DELETE',
    })
      .then(() => {
        setNumTickets(numTickets + 1);
      });
  };
  

  useEffect(() => {
    fetch('http://localhost:8081/get')
      .then((res) => res.json())
      .then((result) => {
        setTickets(result);
      });
  }, [numTickets]);

  return (
    <Container>
      <Paper elevation={3} style={paperStyle}>
        <h1 style={{ color: 'orange' }}><u>Passenger Details</u></h1>
        <form className={classes.root} noValidate autoComplete="off">
          <TextField
          className='inp'
            id="outlined-basic"
            label="Passenger Name"
            variant="outlined"
            fullWidth
            value={name}
            color="secondary"
            onChange={(e) => setName(e.target.value)}
          />
          <TextField
          className='inp'
            id="outlined-basic"
            label="From"
            variant="outlined"
            fullWidth
            value={splace}
            color="secondary"
            onChange={(e) => setSplace(e.target.value)}
          />
          <TextField
          className='inp'
            id="outlined-basic"
            label="To"
            variant="outlined"
            fullWidth
            value={eplace}
            color="secondary"
            onChange={(e) => setEplace(e.target.value)}
          />
          <TextField
          className='inp'
            id="outlined-basic"
            label="Date"
            variant="outlined"
            fullWidth
            value={tdate}
            
            color="secondary"
            onChange={(e) => setTdate(e.target.value)}
          />
          <TextField
          className='inp'
            id="outlined-basic"
            label="Passenger Ph.no"
            variant="outlined"
            fullWidth
            value={phno}
            color="secondary"
            backgroundColor
            onChange={(e) => setPhno(e.target.value)}
          />
          <Button variant="contained" color="primary" onClick={handleClick}>
            Submit
          </Button>
        </form>
      </Paper>
      <h1>Tickets</h1>
      {tickets.map((ticket) => (
        <Paper elevation={3} style={paperStyle} key={ticket.id}>
          <div className="output">
            <div style={{ paddingRight: 50 }}>
              Id:
              {ticket.id}
              <br />
              Name:
              {ticket.name}
              <br />
              From:
              {ticket.splace}
              <br />
              To:
              {ticket.eplace}
              <br />
              Date:
              {ticket.tdate}
              <br />
              Ph-no:
              {ticket.phno}
              <br />
            </div>
            <div>
              <Button
                variant="contained"
                color="secondary"
                style={{ marginTop: 25, marginLeft: 200 }}
                onClick={() => handleDelete(ticket.id)}
              >
                Delete
              </Button>
              <br/>
              <Button
  variant="contained"
  color="secondary"
  style={{ marginTop: 25, marginLeft: 200 }}
  onClick={() => handleUpdate(ticket.id)}
>
  Update
</Button>

            </div>
          </div>
        </Paper>
      ))}
    </Container>
  )
      }