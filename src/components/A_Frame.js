import React, {Component} from 'react'
import './A_Frame.css'

import {connect} from 'react-redux'

class A_Frame extends Component {
    componentDidMount(){
    }

    componentDidUpdate(){

    }

    componentWillReceiveProps(nextProps){
        if(this.props.settingsObj.imageID !== nextProps.settingsObj.imageID){
            return true;
        }else{
            return false;
        }
    }

    render(){
        return (
        <a-scene id="a_frame">
            <a-sky src={this.props.settingsObj.imageID} rotation="0 -130 0"></a-sky>
        </a-scene>
        );
    }
}

function mapDispatchToProps(dispatch) {
    return({
       
    })
}

function mapStateToProps(store){
    return {
        settingsObj : store.settingsReducer
    }
}


export default connect( mapStateToProps,mapDispatchToProps)(A_Frame);