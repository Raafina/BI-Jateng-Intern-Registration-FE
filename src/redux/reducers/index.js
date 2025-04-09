import { combineReducers } from '@reduxjs/toolkit';
import auth from './authReducers';
import SAWResult from './SAWResultReducers';
import application from './applicationReducers';

export default combineReducers({ auth, SAWResult, application });
