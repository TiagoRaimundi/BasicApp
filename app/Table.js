import React from 'react'
import {Text} from 'react-native'

class Table extends React.PureComponent{
    constructor(props){
        super(props)
        this.state = {
            isBig: false
        }
    }
    changeState = () => {
        this.setState({isBig: !this.state.isBig})
    }
    render(){
        console.log('this.state.is:>>>', this.state.isBig)
        return(
            <Text style={{fontSize: this.state.isBig ? 24:14}}onPress={this.changeState}>This is a Table</Text>
        )
    }
}

export default Table