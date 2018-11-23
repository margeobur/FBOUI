import * as React from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';

import { Header } from './components/Header';
import EmployeeSearchScreen from './components/EmployeeSearchScreen';
import { History } from 'history';
import EmployeeCustomerList from './components/EmployeeCustomerList';
import { LinkedCustomer } from './components/reusables/customer';

interface AppProps {
  history: History;
}

interface AppState {
  searchValue: string,
  customers: LinkedCustomer[]
}

class App extends React.Component<AppProps, AppState> {
  constructor(props:any) {
    super(props);
        this.state = {
            searchValue: '',
            customers: []
        };

    this.handleMainSearch = this.handleMainSearch.bind(this);
    this.fetchCustomers = this.fetchCustomers.bind(this);
    this.fetchCustomers("", "");
  }

  public render() {
    return (
      <div className="App">
        <Header />
        <main>
          <Switch>
            <Route exact={true} path='/' render={ this.EmpSearchScreen }/>
            <Route path='/customers' render={ this.CustomerList } />
          </Switch>
        </main>
      </div>
    );
  }

  public handleMainSearch(searchVal: string) { 
    this.setState( {searchValue: searchVal });
    this.fetchCustomers(searchVal, "old");
  }

  private fetchCustomers(searchValue: string, searchType: string) {
    alert("searching unimplemented");
    console.log('searching customers: ' + searchValue + ' as ' + searchType);

    const url = "https://fbo-api.azurewebsites.net/api/customerlinks";
    fetch(url, {
			method: 'GET'
		})
		.then(res => res.json())
		.then(json => {
			let currentCustomer = json[0]
			if (currentCustomer === undefined) {
        console.log("no customers received");
				console.log(json);
				currentCustomer = {
            oldData: {
              id: 1643788,
              firstName: "No",
              surname: "customers"
            }
        }
      }
      console.log(json);
      this.setState({
          customers: json
      });
      
      // if(searchType.startsWith("old")) {
			//   this.setState({
				
      //   })
      // } else if(searchType.startsWith("new")) {

      // } else if(searchType.startsWith("both")) {

      // }
		});
  }

  private CustomerList = (props: any) => {
    return (
      <EmployeeCustomerList
        history={this.props.history}
        searchValue={this.state.searchValue}
        customers={this.state.customers}
        handleSearch={this.handleMainSearch}
        {...props}
      />
    );
  }

  private EmpSearchScreen = (props: any) => {
    return (
      <EmployeeSearchScreen
        history={this.props.history}
        searchValue={this.state.searchValue}
        handleSearch={this.handleMainSearch}
        {...props}
      />
    );
  }

}

export default App;
