if (process.env.REACT_APP_ENABLE_REDUX_LOG === 'false') {
  module.exports = require('./configureStore.prod');
} else {
  module.exports = require('./configureStore.dev');
}
