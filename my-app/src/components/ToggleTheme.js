import React, { Component } from 'react'
import { ThemeContext } from '../contexts/themeContext'

export default class ToggleTheme extends Component {
    static contextType = ThemeContext
    render() {
        const {data}=this.context
        return (
            <div>
                <button onClick={data}>ToggleTheme</button>
            </div>
        )
    }
} 
