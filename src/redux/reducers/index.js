import { combineReducers } from 'redux';
import localStorage from 'redux-persist/lib/storage';
import dashboardReducer from '../../modules/home/slice/homeSlice';
import loginReducer from '../../modules/login/slice/loginSlice';
import aboutReducer from '../../modules/about/slice/aboutSlice';
import shocaseReducer from '../../modules/work-shocase/slice/shocaseSlice';

const appReducer = combineReducers({
  dashboard: dashboardReducer,
  login: loginReducer,
  about: aboutReducer,
  shocase: shocaseReducer,
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
