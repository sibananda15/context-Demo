import React, { Component,createContext } from 'react'
export const ThemeContext=createContext();

export default class ThemeContextProvider extends Component {
    state={
        isLight:true,
        light:{syntax:'#555',ui:'#ddd',bg:'#eee'},
        dark:{syntax:'#ddd',ui:'#333',bg:'#555'}
    }
    toggleTheme = ()=>{
        this.setState({isLight: !this.state.isLight})
    }
    render() {
        return (
            <ThemeContext.Provider value={{...this.state,data:this.toggleTheme}}>
                {this.props.children}
               {/* this refers to ThemeContextProvider,which wraps child component */}
            </ThemeContext.Provider>
        )
    }
}
