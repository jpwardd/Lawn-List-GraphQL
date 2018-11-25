import React from 'react'

import { BrowserRouter as Router, Route, Switch} from "react-router-dom"

import Nav from './Nav';
import JobsContainer from "../containers/JobsContainer"
import CustomersContainer from '../containers/CustomersContainer';
import Weather from "../components/Weather"
import EmployeesContainer from "../containers/EmployeesContainer"

export const App = (props) => {
  return (
      <Router>
        <Switch>
          <Route exact path="/" component={JobsContainer} />
          <Route path="/customers" component={CustomersContainer} />
          <Route path="/weather" component={Weather} />
          <Route path="/employees" component={EmployeesContainer} />
        </Switch>
      </Router>
  
  )
}
export default App
