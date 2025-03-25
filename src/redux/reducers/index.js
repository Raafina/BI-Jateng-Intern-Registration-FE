import { combineReducers } from '@reduxjs/toolkit';
import auth from './authReducers';
import SAWResult from './SAWResultReducers';

export default combineReducers({ auth, SAWResult });
