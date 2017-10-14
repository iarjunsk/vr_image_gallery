import React, { Component } from 'react';
import './App.css';

import Grid from './Grid'
import A_Frame  from './A_Frame'

import {connect} from "react-redux"
import {fetchImages} from "../actions/actions.image_list"

class App extends Component {

  constructor(props){
    super(props);
    this.props.fetchImages();
  }


  render() {
    return (
      
      <div>

        <div className="loader" style = {{ display:(this.props.imageListsObj.fetching)?'block': 'none' }}>
          <img alt="" src="img/loading.gif"></img>
        </div>

     

        <div style={{display:(this.props.imageListsObj.fetched)?'block': 'none'}}>
          {
            this.props.imageListsObj.image_list.map((image, key) => {
              return <Grid image={image} key={key} />;
            })
          }
        </div>

        <A_Frame/>

      </div>
    );
  }
}


function mapDispatchToProps(dispatch){
  return({
    fetchImages : () => {dispatch(fetchImages())}
  })
}
function mapStateToProps(store){
  return {
    imageListsObj : store.imageListReducer
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(App);
