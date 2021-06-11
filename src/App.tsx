import React from 'react';
import './App.css';
import { ThemeProvider } from 'styled-components';
import { theme } from './theme/theme';
import { Route, Switch } from 'react-router-dom';
import { SignUp } from './pages/SignUp';
import { NotFoundPage } from './pages/NotFoundPage';
import { Container } from './components/Container';

function App() {
  return (
    <ThemeProvider theme={theme}>
    <Container>
      <Switch>
          <Route exact path="/" component={SignUp} />
          <Route component={NotFoundPage} />
        </Switch>

    </Container>
    </ThemeProvider>
  );
}

export default App;
