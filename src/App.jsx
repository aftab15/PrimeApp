import { useState } from 'react'
import { Button } from 'flowbite-react';
import Nav from './Layout/Nav';

function App() {
  return (
    <>
      <Nav/>
      <span>Prime App</span>
      <Button>Ckick Me!</Button>
    </>
  )
}

export default App
