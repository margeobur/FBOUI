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
  links: LinkedCustomer[]
}

class App extends React.Component<AppProps, AppState> {
  constructor(props:any) {
    super(props);
        this.state = {
            searchValue: '',
            links: [{
                oldData: {
                  id: 4881095,
                  username: "jwhales29",
                  firstName: "Jimmy",
                  surname: "Whales",
                  address: "San Francisco",
                  accounts: [{number: "4294249149325"}]
                }
              },
              {
                oldData: {
                  id: 1643788,
                  username: "emusk10",
                  firstName: "Elon",
                  surname: "Musk",
                  address: "Los Angeles",
                  accounts: [{number: "47416843392569"}]
                },
                newData: {
                  id: "0015-7983-2945",
                  username: "elon_musk",
                  givenNames: ["Elon", "Reeve", "Musk"],
                  email: "emusk@gmail.com",
                  accounts: [{number: "47416843392569"}]
                }
              }]
        };

    this.handleMainSearch = this.handleMainSearch.bind(this);
    this.doSearch = this.doSearch.bind(this);
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
    this.doSearch(searchVal, "old");
  }

  private doSearch(searchValue: string, searchType: string) {
    alert("feature unimplemented");
    console.log('searching memes: ' + searchValue + ' as ' + searchType);

    // let url = "";
    // fetch(url, {
		// 	method: 'GET'
		// })
		// .then(res => res.json())
		// .then(json => {
		// 	let currentCustomer = json[0]
		// 	if (currentCustomer === undefined) {
		// 		console.log(json)
		// 		currentCustomer = {"id":0, "title":"No memes (╯°□°）╯︵ ┻━┻","url":"","tags":"try a different tag","uploaded":"","width":"0","height":"0"}
    //   }
      
    //   if(searchType.startsWith("old")) {
		// 	  this.setState({
				
    //     })
    //   } else if(searchType.startsWith("new")) {

    //   } else if(searchType.startsWith("both")) {

    //   }
		// });
  }

  private CustomerList = (props: any) => {
    return (
      <EmployeeCustomerList
        history={this.props.history}
        searchValue={this.state.searchValue}
        customers={this.state.links}
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
