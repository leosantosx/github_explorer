import React from 'react'
import { Route, Switch } from 'react-router-dom'

import Dashboad from '../pages/Dashboard'
import Repository from '../pages/Repository'

const Routes: React.FC = () => {
    return (
        <Switch>
            <Route path="/" exact component={Dashboad} />
            <Route path="/repo/:repo+" component={Repository} />
        </Switch>
    )
}

export default Routes
