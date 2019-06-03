import React from 'react';
import {Route, Switch, Link, Redirect } from "react-router-dom"


function App(props) {
  return (
    <div>
      {/* <Switch>
        <Route exact path={"/"} render={() => !props.token ? <Auth /> : <Redirect to = "/questions/entry" />} />
        <Route path="/expenses" render={rprops => props.token? <MainView /> : <Redirect to = "/" />} />
      </Switch> */}
    </div>
  )
}

export default withContext(App);
