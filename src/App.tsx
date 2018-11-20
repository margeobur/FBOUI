import * as React from 'react';
import './App.css';

import { Header } from './components/Header';
import EmployeeSearchScreen from './components/EmployeeSearchScreen';

class App extends React.Component {
  public render() {
    return (
      <div className="App">
        <Header />
        <EmployeeSearchScreen/>
      </div>
    );
  }
}

export default App;
