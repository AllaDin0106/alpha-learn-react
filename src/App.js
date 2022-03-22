import './styles/App.min.css';
import Menu from './components/Menu';
import Login from './components/login/Login';
import Content from './components/Content';
import { useState } from 'react';
import { Context } from './core/context';
import { InitTheme } from './core/settings';
import { loggedIn } from './core/user';

const App = () => {

  const [content, setContent] = useState('home');

  const login = <Login />;
  const app =
    <Context.Provider value={InitTheme()}>
      <Menu setContent={setContent} />
      <Content content={content} />
    </Context.Provider>;

  return (
    <div className="App">
      {loggedIn() ? app : login}
    </div>
  );
}

export default App;