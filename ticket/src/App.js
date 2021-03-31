import React from 'react';
import Header from "./Components/Header"
import {BrowserRouter,Route, Switch} from "react-router-dom"
import Body from "./Components/Body"
import Edit from "./Components/Edit"
import AddTicket from "./Components/AddTicket"
import './App.css';


function App() {
  return (
    <>
    <Header/>
   <BrowserRouter>  
     <Switch>
     <Route exact path="/"component={Body}/>
     <Route exact path="/add"component={AddTicket}/>
    <Route exact path="/edit/:id" component={Edit}/>
</Switch>
   
   </BrowserRouter>
   </>
  );
}

export default App;
