import { makeStyles, Theme } from '@material-ui/core';
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import { Footer } from './components/footer/footer';
import { Header } from './components/header/header';
import { Main } from './pages/main/main';
import { Person } from './pages/person/person';
import { Video } from './pages/video/video';


const useStyles = makeStyles((theme: Theme) => ({
  root: { flexGrow: 1 },
  main:  { paddingTop: '60px' },
}))

function App() {

  const classes = useStyles()

  return (
<BrowserRouter>
  <Header/>
  <main className={classes.main}>
    <Routes>
      <Route path='/' element={ <Main/> }/>
      <Route path='/persons/:id' element={ <Person/> }/>
      <Route path='/video/:id' element={ <Video/> }/>
    </Routes>
  </main>
  <Footer/>

</BrowserRouter>
  );
}

export default App;
