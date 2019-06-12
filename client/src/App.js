import React from 'react';
import {Route, Switch, Redirect } from "react-router-dom"
import Auth from './auth/Auth'
import View from './View'
import { withContext } from "./AppContext"
import Question from "./components/questions/Question";

// need to add a home button
function App(props) {
  return (
    <div>
      <Switch>
        <Route exact path={"/"} render={() => !props.token ? <Auth /> : <Redirect to = "/questions" />} />
        <Route path="/questions" render={rprops => props.token? <View /> : <Redirect to = "/" />} />
        <Route path= "/questions/:_id" render={rprops => props.token? <Question /> : <Redirect to ="/" /> } />
      </Switch>
    </div>
  )
}

// export default withContext(App);
export default withContext(App)