import * as React from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';

import { Header } from './components/Header';
import EmployeeSearchScreen from './components/EmployeeSearchScreen';
import { History } from 'history';
import EmployeeCustomerList from './components/EmployeeCustomerList';
import { LinkedCustomer } from './components/reusables/customer';
import EditCustomers from './components/EditCustomers';

interface AppProps {
  history: History;
}

interface AppState {
  searchValue: string,
  currentCustomer: LinkedCustomer,
  customers: LinkedCustomer[]
}

class App extends React.Component<AppProps, AppState> {
  constructor(props:any) {
    super(props);
        this.state = {
            searchValue: '',
            currentCustomer: { link: { id: "", oldID: 0, newID: "" } },
            customers: []
        };

    this.handleMainSearch = this.handleMainSearch.bind(this);
    this.fetchCustomers = this.fetchCustomers.bind(this);
    this.selectCustomer = this.selectCustomer.bind(this);
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
            <Route path='/addCustomers' render={this.EditCustomerList } />
          </Switch>
        </main>
      </div>
    );
  }

  public selectCustomer(customer: LinkedCustomer) {
    this.setState({
			currentCustomer: customer
		})
  }

  public handleMainSearch(searchVal: string) { 
    alert("searching yet to be implemented");
    this.setState( {searchValue: searchVal });
    this.fetchCustomers(searchVal, "old");
  }

  private fetchCustomers(searchValue: string, searchType: string) {
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
          currentCustomer,
          customers: json
      });
      this.populateBasicDummyDataInternally();
      
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
        selectedCustomer={this.state.currentCustomer}
        selectCustomer={this.selectCustomer}
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

  private EditCustomerList = (props: any) => {
    return (
      <EditCustomers
        history={this.props.history}
        searchValue={this.state.searchValue}
        handleSearch={this.handleMainSearch}
        {...props}
      />
    );
  }

  private populateBasicDummyDataInternally() {
    this.setState({
      customers: [{
          link: {
            id: "1",
            oldID: 1643788,
            newID: "0015-7983-2945"
          },
          oldData: {
            id: 1643788,
            username: "emusk10",
            firstName: "Elon",
            surname: "Musk",
            address: "Los Angeles",
            accounts: []
          },
          newData: {
            id: "0015-7983-2945",
            username: "elon_musk",
            givenNames: [ "Elon", "Reeve", "Musk" ],
            email: "emusk@gmail.com",
            accounts: []
          }
        },
        {
          link: {
            id: "2",
            oldID: 4881095,
            newID: ""
          },
          oldData: {
            id: 4881095,
            username: "jwhales29",
            firstName: "Jimmy",
            surname: "Whales",
            address: "San Francisco",
            accounts: []
          }
        },
        {
          link: {
            id: "3",
            oldID: 0,
            newID: "0015-7899-6240"
          },
          newData: {
            id: "0015-7899-6240",
            username: "jwhales29",
            givenNames: [ "Jimmy", "Whales" ],
            email: "jwhale@hotmail.com",
            accounts: []
          }
        }
      ]
    });
  }
}

export default App;
