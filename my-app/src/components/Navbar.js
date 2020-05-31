import React, { Component } from 'react'
import { ThemeContext } from '../contexts/themeContext'


export default class Navbar extends Component {
    static contextType = ThemeContext
    render() {
        console.log(this.context)
        const {isLight,dark,light}=this.context
        const theme = isLight?dark:light

        return (
            <nav style={{background:theme.ui,color:theme.syntax}}>
                <h1>Context App</h1>
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>
            </nav>
        )
    }
}

// dark: {syntax: "#ddd", ui: "#333", bg: "#555"}
// isLight: true
// light: {syntax: "#555", ui: "#ddd", bg: "#eee"}
// __proto__: Object

