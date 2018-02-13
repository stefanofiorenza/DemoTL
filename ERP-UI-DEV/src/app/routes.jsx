import React from 'react';
import { Router, Route, hashHistory, IndexRoute } from 'react-router';
import MainPage from './components/pages/MainPage.jsx';
import MasterPage from './components/MasterPage.jsx';
import LoginPage from './components/pages/LoginPage.jsx';
import EmployeeSearchPage from './components/pages/EmployeeSearchPage.jsx';
import NewEmployeePage from './components/pages/NewEmployeePage.jsx';
import EmployeeDetailsPage from './components/pages/EmployeeDetailsPage.jsx';
import RequiresAuth from './components/pages/RequiresAuth.jsx';

export default(
  
 <Router history={hashHistory}> 
    <Route path="/" component={MasterPage}>
      {/*  <Route path="/" component={RequiresAuth(MasterPage)}>*/}

        <IndexRoute component={MainPage} />
        <Route path="login" component={LoginPage} />
        <Route path="newEmployee" component={NewEmployeePage} />
        <Route path="employeeDetails" component={EmployeeDetailsPage} />
        <Route path="searchEmployees" component={EmployeeSearchPage} />
    </Route>
  </Router>
);
