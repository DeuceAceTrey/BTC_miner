import React ,{useState} from 'react';
import { Row, Col ,Button,Input,Modal,ModalHeader,ModalBody,ModalFooter} from "reactstrap";

function CustomModal(props) {
    const toggleModal = () => {
        props.handleModal(!props.isModal);
        console.log(props.isModal)
      };
    return (
        <Modal
          modalClassName={props.modal_class}
          isOpen={props.isModal}
          toggle={toggleModal}
        >
          <ModalHeader>
            <button
              aria-label="Close"
              className="close"
              onClick={toggleModal}
            >
              <i className="tim-icons icon-simple-remove" />
            </button>
            <ModalBody >
              <p style={{fontSize : '22px',color:''}}>{props.alert_string}</p>
            </ModalBody>
          </ModalHeader>
          
          
        </Modal>
    );
}
export default CustomModal;