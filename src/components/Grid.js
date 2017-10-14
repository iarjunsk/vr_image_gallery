import React, {Component} from 'react';
import './Grid.css';

import {show_image} from "../actions/actions.settings"
import {connect} from "react-redux"

class Grid extends Component{

    constructor(props){
        super(props);
        this.onItemClick = this.onItemClick.bind(this);
    }

    onItemClick(event){
        const {id} = event.target; // event.target is recieved from Grid html DOM
        this.props.show_image(id);
    };

    render(){
        var image = this.props.image;
        return (
            <div className="card card-2">
      
                <div className="container">
                    <img className="cover_image" alt="" src={image.pano}  style={{width: "100%" , height:"90%"}}  />
                    <div className="middle">
                        <div className="text">
                            <i className="fa fa-eye" id={image.pano} onClick={this.onItemClick} ></i>
                        </div>
                    </div>
                </div>

                <div style={{margin:"3px"}} className="image-card-bottom-div">
                    <a className="image-card-title">
                        {image.name}
                    </a>
                </div>
      
            </div>
          );
    }
}

function mapDispatchToProps(dispatch){
    return({
        show_image:  (id) => {dispatch(show_image(id))} 
    })
}

function mapStateToProps(store){
    return{
    }
}

export default connect( mapStateToProps, mapDispatchToProps)(Grid);