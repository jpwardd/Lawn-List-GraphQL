import React, { Component } from 'react'
import List from "@material-ui/core/List"
import Typography from "@material-ui/core/Typography"
import BackButton from '../components/BackButton';
import styled from "styled-components"
import Card from "@material-ui/core/Card"
import AddIcon from "@material-ui/icons/Add";
import Button from "@material-ui/core/Button"
import CustomerFormDialog from "../components/customers/CustomerFormDialog"
import CustomerList from "../components/customers/CustomerList"
import { Query } from "react-apollo"
import gql from "graphql-tag"
import Nav from "../components/Nav"


const Container = styled.div`

  box-shadow: 3px 5px 7px #ccc;
  border-radius: 20px;
  width: 75%;
  height: 100%;
  margin: 50px auto;
  padding: 20px;
  background-color: #739574;
`;

const FormDialog = styled.div`
  margin: auto;
  text-align: right;
`

export default class CustomersContainer extends Component {
  constructor(props){
    super(props)
    this.state = {
      customers: []
    }
    // this.addNewCustomer = this.addNewCustomer.bind(this);
    // this.handleDelete = this.handleDelete.bind(this);
    // this.deleteCustomerHandler = this.deleteCustomerHandler.bind(this);
    // this.editCustomerHandler = this.editCustomerHandler.bind(this);
  }


  showFullCustomerHandler(id) {
    if (id === this.state.customerId) {
      this.setState(state => ({ customerId: null }));
    } else {
      this.setState(state => ({ customerId: id }));
    }
  }

  render() {
    return(
       <div>
       <Nav />
        <BackButton />
        <Typography align="center" variant="h4" gutterBottom>
          Customers
        </Typography>
        <Container>
          <FormDialog>
            <CustomerFormDialog customers={this.state.customers} addNewCustomer={this.addNewCustomer} />
          </FormDialog>
          <CustomerList />
        </Container>
      </div>
    )
  }
}
