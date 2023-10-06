import { Route, Routes } from 'react-router-dom';
import './App.css';
import { LandingPage } from './screens/LandingPage';
import { RoutesAll } from './routes';

function App() {
  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={ <LandingPage /> } />
        <Route path='/*' element={ <RoutesAll /> } />
      </Routes>
    </div>
  );
}

export default App;
