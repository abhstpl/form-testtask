import React from 'react';
import { connect } from 'react-redux';
import { Container, Row, Col, Button, Modal, ModalBody, ModalFooter, Table} from 'reactstrap';
import './style.scss';
import { getForm, addForm } from '../../actions/actionUpdateForm';
import Form from './Form';

class Home extends React.PureComponent {
  state = {
    open: false,
    item: {}
  }
  componentWillMount() {
    this.props.getForm();
  }
  componentDidUpdate() {
    if(this.props.reload) {
      this.props.getForm();
    }
  };

  render() {
    const { formData } = this.props;
    return (
      <React.Fragment>
        <Container className="headerContainer">
          <Row>
            <div className="header"><h1>Test Task</h1></div>
          </Row>
        </Container>
          <Row>
            <Col xs="5"></Col>
            <Col xs="4">
              <Button onClick={() => {this.setState({open: !this.state.open})}}>ADD</Button>  
            </Col>
            <Col xs="6"></Col>
          </Row>
         <Modal isOpen={this.state.open} toggle={() => this.setState({open: !this.state.open})}>
           <ModalBody>
            <Form onAdd={this.props.onAdd} item={this.state.item}/>
           </ModalBody>
           <ModalFooter>
              <Button color="secondary" onClick={() => this.setState({open: !this.state.open})}>Cancel</Button>
          </ModalFooter>
         </Modal>
         <Container>
           <Table>
             <thead>
              <tr>
                <th>email</th>
                <th>firstName</th>
                <th>lastName</th>
                <th>company</th>
                <th>department</th>
             </tr>
             </thead>           
            {formData && formData.map((item, id) => {
              return (
                <tbody key={id } onClick={()=> this.setState({
                  open: !this.state.open,
                  item: item
                  })}>
                  <tr>
                  <td>
                    {item.email}
                  </td>
                  <td>
                    {item.firstName}
                  </td>
                  <td>
                    {item.lastName}
                  </td>
                  <td>
                    {item.company}
                  </td>
                  <td>
                    {item.department}
                  </td>
                  </tr>
                </tbody>
              );
            })}
          </Table>
        </Container> 
      </React.Fragment>
    );
  }
}



function mapStateToProps(state) {
  return {
    formData: state.info.formData,
    reload: state.info.reload
  };
}

function mapDispatchToProps(dispatch) {
  return({
    onAdd: (firstName, lastName, company, department, email) => dispatch(addForm(firstName, lastName, company, department, email)),
    getForm: () => dispatch(getForm())
  });
}

const HomeContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);

export default HomeContainer;