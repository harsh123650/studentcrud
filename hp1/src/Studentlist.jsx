
import axios from 'axios'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import Table from "react-bootstrap/Table";


import {useEffect, useState } from "react";


export default function Studentlist(){


const [data,SetData]=useState([])
const [id,Setid]=useState("")

const [unm,SetUName]=useState("")
const [uct,SetUCity]=useState("")
const [umob,SetUMob]=useState("")

const [nm,SetName]=useState("")
const [ct,SetCity]=useState("")
const [mob,SetMob]=useState("")
//save
const [show, setShow] = useState(false);
const handleClose = () => setShow(false);
const handleShow = () => setShow(true);
let hndlnm=(e)=>{SetName(e.target.value)}
let hndlct=(e)=>{SetCity(e.target.value)}
let hndlmb=(e)=>{SetMob(e.target.value)}
//update
const [ushow, setUShow] = useState(false);
const uhandleClose = () => setUShow(false);
const uhandleShow = () => setUShow(true);

let uhndlnm=(e)=>{SetUName(e.target.value)}
let uhndlct=(e)=>{SetUCity(e.target.value)}
let uhndlmb=(e)=>{SetUMob(e.target.value)}

let getdata=(id,name,city,mob)=>{
Setid(id)
 SetUName(name)
 SetUCity(city)
 SetUMob(mob)
 uhandleShow()
}


let addstud=()=>{
   const dt={
    name:nm,
    city:ct,
    mob:mob
  }
  axios.post("http://localhost:8080/save",dt)
  .then(res=>{
        alert("success")
        api()
        setShow(false)
  })
}


let updtstud=()=>{
   const dt={
    name:unm,
    city:uct,
    mob:umob,
    id:id
  }
  axios.put("http://localhost:8080/updt",dt)
  .then(res=>{
        alert("Update success")
        api()
        setUShow(false)
  })
}



let del=(id)=>{
   alert(id)
  
   axios.delete("http://localhost:8080/dlt/"+id)
   .then(res=>{
    alert("Delete Success..!")
    api()
    setShow(false)
   })
}

let api=()=>{
    axios.get("http://localhost:8080/stud")
    .then(res=>{
        console.log(res.data)
        SetData(res.data)
    })
}
//onload 
     useEffect(()=>{
     api()
     },[])

    return(
     <>
       <Container className="mt-5">
    <Card className="shadow-lg border-0">
      <Card.Body>
        
        {/* Title */}
        <h2 className="text-center mb-4">Student Management</h2>

        {/* Add Button */}
        <div className="d-flex justify-content-end mb-3">
          <Button variant="primary" onClick={handleShow}>
            + Add Student
          </Button>
        </div>

        {/* Table */}
        <Table striped bordered hover responsive className="text-center">
          <thead className="table-dark">
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>City</th>
              <th>Mobile</th>
              <th>Actions</th>
            </tr>
          </thead>

          <tbody>
            {data.map((item) => (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>{item.city}</td>
                <td>{item.mob}</td>
                <td className="d-flex justify-content-center gap-2">
                  <Button
                    variant="warning"
                    size="sm"
                    onClick={() =>
                      getdata(item.id, item.name, item.city, item.mob)
                    }
                  >
                    Update
                  </Button>

                  <Button
                    variant="danger"
                    size="sm"
                    onClick={() => del(item.id)}
                  >
                    Delete
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Card.Body>
    </Card>

    {/* ADD STUDENT MODAL */}
    <Modal show={show} onHide={handleClose} centered>
      <Modal.Header closeButton>
        <Modal.Title>Add New Student</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form.Control className="mb-3" type="text" onChange={hndlnm} placeholder="Enter Name" />
        <Form.Control className="mb-3" type="text" onChange={hndlct} placeholder="Enter City" />
        <Form.Control className="mb-3" type="number" onChange={hndlmb} placeholder="Enter Mobile" />
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Cancel
        </Button>
        <Button variant="primary" onClick={addstud}>
          Save
        </Button>
      </Modal.Footer>
    </Modal>

    {/* UPDATE STUDENT MODAL */}
    <Modal show={ushow} onHide={uhandleClose} centered>
      <Modal.Header closeButton>
        <Modal.Title>Update Student</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form.Control className="mb-3" type="text" value={unm} onChange={uhndlnm} />
        <Form.Control className="mb-3" type="text" value={uct} onChange={uhndlct} />
        <Form.Control className="mb-3" type="number" value={umob} onChange={uhndlmb} />
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={uhandleClose}>
          Cancel
        </Button>
        <Button variant="success" onClick={updtstud}>
          Update
        </Button>
      </Modal.Footer>
    </Modal>
  </Container>

     </>
    )
}