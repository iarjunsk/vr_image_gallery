import {combineReducers} from 'redux'

import settingsReducer from './reducer.settings'
import imageListReducer from './reducer.image_list'


export default combineReducers({
    settingsReducer,
    imageListReducer
});