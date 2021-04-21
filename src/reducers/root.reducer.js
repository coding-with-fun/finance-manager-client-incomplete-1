/**
 * @author Harsh Patel @harsh2124
 */

import { combineReducers } from 'redux';
import user from './user.reducer';

const root = combineReducers({
    user,
});

export default root;
