import { combineReducers } from '@reduxjs/toolkit';
import auth from './authReducers';
import SAWResult from './SAWResultReducers';
import application from './applicationReducers';
import weight from './weightReducers';

export default combineReducers({ auth, SAWResult, application, weight });
