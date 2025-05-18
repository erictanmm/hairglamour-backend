import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [appointments, setAppointments] = useState([]);

  useEffect(() => {
    fetch("http://127.0.0.1:8000/api/appointments/")
      .then((res) => res.json())
      .then((data) => setAppointments(data));
  }, []);

  return (
    <div className="App">
      <h1>Salon Appointments</h1>
      <ul>
        {appointments.map((a) => (
          <li key={a.id}>
            {a.customer_name} - {a.service} on {a.date} at {a.time}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;


/* import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
*/
