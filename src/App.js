
import {
  BrowserRouter as Router,
  Redirect,
  Switch,
  Route
} from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle, theme }from './styled-components/GlobalStyle';
import Manifiesto from './pages/Manifiesto';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Router>
        <Switch>
        <Route exact path='/'>
            <Redirect to='/manifiesto' />
        </Route>
          <Route exact path='/manifiesto' component={Manifiesto} />
        </Switch>
      </Router>
    </ThemeProvider>
  );
}

export default App;
