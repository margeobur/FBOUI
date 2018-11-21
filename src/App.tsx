import * as React from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';

import { Header } from './components/Header';
import EmployeeSearchScreen from './components/EmployeeSearchScreen';
import { History } from 'history';
import EmployeeCustomerList from './components/EmployeeCustomerList';

interface AppProps {
  history: History;
}

interface AppState {
  searchValue: string,
  oldDBCustomers: any[],
  newDBCustomers: any[],
  links: any[]
}

class App extends React.Component<AppProps, AppState> {
  constructor(props:any) {
    super(props);
        this.state = {
            searchValue: '',
            oldDBCustomers: [],
            newDBCustomers: [],
            links: []
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
