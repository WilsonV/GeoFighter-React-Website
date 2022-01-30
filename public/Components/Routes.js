import React, {Component} from "react";
import { BrowserRouter,Route } from "react-router-dom"
import HomePage from "./HomePage";

function Routes (){

  return(
      <Route path="/test" component={HomePage} />
  )
}

export default Routes;
