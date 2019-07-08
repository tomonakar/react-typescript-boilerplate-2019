import * as React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import PageA from '../pages/PageA'
import PageB from '../pages/PageB'

const router = (
  <Router>
    <Switch>
      <Route exact path="/" component={PageA} />
      <Route exact path="/pageb" component={PageB} />
      <Route component={PageA} />
    </Switch>
  </Router>
)

export default router
