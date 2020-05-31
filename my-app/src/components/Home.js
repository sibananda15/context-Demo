import React, { Component } from 'react'
import { ThemeContext } from '../contexts/themeContext'
import { AuthContext } from '../contexts/AuthContextProvider.js'


export default class Home extends Component {

    render() {

        return (
            <AuthContext.Consumer>
                {(authContext) => (<ThemeContext.Consumer>{(themecontext) => {
                    console.log(themecontext)
                    const { isLight, dark, light } = themecontext;
                    const { isAuthenticated, auth } = authContext;
                    const theme = isLight ? dark : light


                    return (
                        <div className="book-list" style={{ color: theme.syntax, background: theme.bg }}>
                            <div onClick={() => auth()}>
                                {isAuthenticated ? 'Logged in' : 'Logged out'}
                            </div>
                            <ul>
                                <li style={{ background: theme.ui }}>the way of kings</li>
                                <li style={{ background: theme.ui }}>the name of the wind</li>
                                <li style={{ background: theme.ui }}>the final empire</li>
                            </ul>
                        </div>
                    )
                }}</ThemeContext.Consumer>)}
            </AuthContext.Consumer>



        )
    }
}
