import React from 'react';
import logo from './logo.svg';
import './App.css';
import { ThemeProvider } from 'styled-components';
import { theme } from './theme/theme';
import { Route, Switch } from 'react-router-dom';
import { SignUp } from './pages/SignUp';
import { NotFoundPage } from './pages/NotFoundPage';

function App() {
  return (
    <ThemeProvider theme={theme}>
    <div className="App">
    <Switch>
        <Route exact path="/" component={SignUp} />
        <Route component={NotFoundPage} />
      </Switch>

    </div>
    </ThemeProvider>
  );
}

export default App;
