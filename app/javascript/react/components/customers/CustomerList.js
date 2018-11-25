import React, { Component } from 'react'
import CustomerTile from "./CustomerTile"
import PropTypes from 'prop-types'
import gql from "graphql-tag"
import { Query } from "react-apollo"

const CUSTOMER_QUERY = gql`
  query allCustomers {
    allCustomers {
      first_name
      last_name
      phone_number
      email
      address
      user_id
      lat
      lng
    }
  }
`;

class CustomerList extends Component {
  state = {
    customers: []
  }
  render() {
    const { customers } = this.state;
    return (
      <Query query={CUSTOMER_QUERY}>
        {({ loading, error, data }) => {
          if (loading) return <div>Fetching</div>;
          if (error) return <div>Error</div>;

          const customersToRender = data.allCustomers;
        
          return(
            <div>
              {customersToRender.map((customer, index) => (
                <CustomerTile
                  key={index}
                  id={customer.id}
                  firstName={customer.first_name}
                  lastName={customer.last_name}
                  phoneNumber={customer.phone_number}
                  email={customer.email}
                  address={customer.address}
                  customerId={this.state.customerId}
                  editCustomerHandler={this.editCustomerHandler}
                  lat={+customer.lat}
                  lng={+customer.lng}
                />
              ))}
            </div>
          )
        }}
      </Query>
    )
  }
}


export default CustomerList