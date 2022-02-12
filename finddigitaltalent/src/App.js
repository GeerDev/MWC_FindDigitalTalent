import './App.css';

import Welcome from './components/Welcome';
import Form from './components/Form';
import WorkArea from './components/WorkArea';
import UserList from './components/UserList';
import UserDetail from './components/UserDetail';

const App = () => {
  return (
    <>
    <h1>Hola esto es el principio de mi Aplicación</h1>
    <Welcome />
    <Form />
    <WorkArea />
    <UserList />
    <UserDetail />
    </>
  );
}

export default App;
