import { combineReducers } from 'redux';
import user from './user.reducer';

const root = combineReducers({
    user,
});

export default root;
