import React from 'react';
import './App.css';
import LoginForm from './components/LoginForm'
import RegistrationForm from './components/RegistrationForm';

function App() {
  return (
    <div className="App">
      <LoginForm />
      <RegistrationForm />
    </div>
  );
}

export default App;
