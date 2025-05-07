import { combineReducers } from '@reduxjs/toolkit';
import auth from './authReducers';
import DSSResult from './DSSResultReducers';
import application from './applicationReducers';
import weight from './weightReducers';

export default combineReducers({ auth, DSSResult, application, weight });
