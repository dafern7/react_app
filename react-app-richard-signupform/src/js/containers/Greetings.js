import React , {Component, useState } from "react";
import { Jumbotron , Button, Container, Modal, ModalHeader, ModalBody, ModalFooter, Fade } from 'reactstrap'
import PropTypes from 'prop-types'
import './greetings.css'
import Cookies from 'js-cookie'



const Greetings = (props) =>  {

    const [modal, setModal] = useState(false);

    const toggle = () => setModal(!modal)

      return (
        <div>
          <Jumbotron fluid>
            <Container fluid>
              <h1 className="GreetingHead">Welcome to the Homepage!</h1>
              <span className="lead">Integrated Storage Technologies controls platform frontend put more interesting things here.</span>
              <hr className="my-2" />
              <span>Description to make people click on the learn more button</span>
              <span className="lead">
                <div>
                  <Button color="primary" onClick={ toggle }>Learn More</Button>
                  <Modal isOpen={modal} toggle={toggle}>
                    <ModalHeader toggle={toggle}>More About IST</ModalHeader>
                    <ModalBody>
                      Integrated Storage Technologies is an energy storage technology company and project developer based in New York City.
                      We develop, own and operate energy storage projects. Our services are tailored for each application.
                      We dive deep into data for every project in order to deliver the most profitable solution. 
                      Our team is comprised of advanced engineers, finance and business professionals with over 100 years combined experience in the energy field.
                    </ModalBody>
                    
                    <ModalFooter>
                      {Cookies.get('authenticate') ?  (
                        <Button color ="secondary" onClick = {toggle}>Cancel</Button>
                      ) : (
                      <>
                      <div>
                      <Button color="primary" onClick={event =>  window.location.href='/login'}>Log In</Button>
                      </div>
                      <div>
                      <Button color="primary" onClick={event =>  window.location.href='/register'}>Sign Up</Button>
                      </div>
                      <div>
                      <Button color ="secondary" onClick = {toggle}>Cancel</Button>
                      </div>
                      </>
                      )}
                    </ModalFooter>
                  </Modal>
                </div>
                
              </span>
            </Container>
          </Jumbotron>
      </div>
    );
  };



Jumbotron.propTypes = {
  // Pass in a Component to override default element
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  fluid: PropTypes.bool,
  className: PropTypes.string
};


Modal.propTypes = {
  // boolean to control the state of the popover
  isOpen:  PropTypes.bool,
  autoFocus: PropTypes.bool,
  // if modal should be centered vertically in viewport
  centered: PropTypes.bool,
  // corresponds to bootstrap's modal sizes, ie. 'lg' or 'sm'
  size: PropTypes.string,
  // callback for toggling isOpen in the controlling component
  toggle:  PropTypes.func,
  role: PropTypes.string, // defaults to "dialog"
  // used to reference the ID of the title element in the modal
  labelledBy: PropTypes.string,
  keyboard: PropTypes.bool,
  // control backdrop, see http://v4-alpha.getbootstrap.com/components/modal/#options
  backdrop: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.oneOf(['static'])
  ]),
  // if body of modal should be scrollable when content is long
  scrollable: PropTypes.bool,
  // allows for a node/component to exist next to the modal (outside of it). Useful for external close buttons
  // external: PropTypes.node,
  // called on componentDidMount
  onEnter: PropTypes.func,
  // called on componentWillUnmount
  onExit: PropTypes.func,
  // called when done transitioning in
  onOpened: PropTypes.func,
  // called when done transitioning out
  onClosed: PropTypes.func,
  className: PropTypes.string,
  wrapClassName: PropTypes.string,
  modalClassName: PropTypes.string,
  backdropClassName: PropTypes.string,
  contentClassName: PropTypes.string,
  // boolean to control whether the fade transition occurs (default: true)
  fade: PropTypes.bool,
  cssModule: PropTypes.object,
  // zIndex defaults to 1000.
  zIndex: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string,
  ]),
  // backdropTransition - controls backdrop transition
  // timeout is 150ms by default to match bootstrap
  // see Fade for more details
  backdropTransition: PropTypes.shape(Fade.propTypes),
  // modalTransition - controls modal transition
  // timeout is 300ms by default to match bootstrap
  // see Fade for more details
  modalTransition: PropTypes.shape(Fade.propTypes),
  innerRef: PropTypes.object,
  // if modal should be destructed/removed from DOM after closing
  unmountOnClose: PropTypes.bool, // defaults to true
  // if the element which triggered the modal to open should focused after the modal closes (see example somewhere below)
  returnFocusAfterClose: PropTypes.bool // defaults to true
}

export default Greetings;