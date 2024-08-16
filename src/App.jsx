import React from 'react'
import './App.css'; 
import Card from './component/card';

function App() {
  return (
    <div>
      <div className='wrapper'>
          <h1>Welcome to the cars information page</h1>
          <Card></Card>
      </div>
    </div>
  )
}

export default App;