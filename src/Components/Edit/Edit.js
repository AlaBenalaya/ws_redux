import React,{useState} from 'react'
import {Modal,Button} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import {useDispatch} from 'react-redux'
import { editTask } from '../../Rudax/Actions/listeTask';
const Edit=({task})=> {
    const [show, setShow] = useState(false);
    const [newtext, setnewtext] = useState(task.text)
  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const dispatch = useDispatch()
    const handleEdit=()=>{
        dispatch(editTask(task.id,newtext))
        handleClose()


    }
  
    return (
      <>
        <Button variant="primary" onClick={handleShow}>
          EDIT
        </Button>
  
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>EDIT NEW TASK</Modal.Title>
          </Modal.Header>
          <Modal.Body><input value={newtext} onChange={(e)=>setnewtext(e.target.value)}/></Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={handleEdit}>
              Saved
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }
  

export default Edit
