import * as React from 'react'
import * as ReactDom from 'react-dom'

import router from '../config/router'
import { ResetStyle } from './utils/styles/reset'

const App = () => (
  <React.Fragment>
    <ResetStyle />
    {router}
  </React.Fragment>
)

ReactDom.render(<App />, document.getElementById('root'))
