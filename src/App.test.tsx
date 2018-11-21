import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './App';
import { createBrowserHistory } from 'history';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App history={createBrowserHistory()}/>, div);
  ReactDOM.unmountComponentAtNode(div);
});
