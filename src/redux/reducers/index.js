import { combineReducers } from 'redux';
import localStorage from 'redux-persist/lib/storage';
import dashboardReducer from '../../modules/home/slice/homeSlice';

const appReducer = combineReducers({
  dashboard: dashboardReducer,
});

export const rootReducer = (state, action) => {
  if (action.type === 'login/logout') {
    // this applies to all keys defined in persistConfig(s)
    localStorage.removeItem('persist:root');
    state = {};
    window.location?.reload();
  }
  return appReducer(state, action);
};
