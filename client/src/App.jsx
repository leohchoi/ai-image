import React from 'react'
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import { Home, CreatePost } from './pages'
import Vite from './assets/vite.svg'

const App = () => {
  return (
    <BrowserRouter>
      <header className='w-full flex justify-between items-center
                         bg-white sm:px-8 px-4 py-4 border-b 
                         border-b-[#e6ebf4]'>
        <Link to="/">
          <img src={Vite} className='w-auto object-contain'/>
        </Link>
        <Link to="/create-post" className='font-medium bg-[#6469ff] text-white px-4 py-2 rounded-md'>
          Create
        </Link>
      </header>
      <main className='sm:p-8 px-4 py-8 w-full bg-[#f9fafe] min-h-[calc(100vh-73px)]'>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/create-post" element={<CreatePost />}></Route>
        </Routes>
      </main>
    </BrowserRouter>
  )
}

export default App