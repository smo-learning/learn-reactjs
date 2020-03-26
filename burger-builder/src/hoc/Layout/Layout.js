import React from 'react'

import classes from './Layout.module.css'

const Layout = (props) => (
    <div className={classes.Layout}>
        <div>Sidebar, Toolbar</div>
        <main>{props.children}</main>
    </div>
)

export default Layout;