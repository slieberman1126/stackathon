import { createStore, applyMiddleware, combineReducers } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import axios from 'axios';

const GET_RESTAURANTS = 'GET_RESTAURANTS';

const GET_NEIGHBORHOODS = 'GET_NEIGHBORHOODS';

const GET_REVIEWS_FROM_YELP = 'GET_REVIEWS_FROM_YELP';

const _getRestaurants = restaurants => {
  return {
    type: GET_RESTAURANTS,
    restaurants,
  };
};

const _getNeighborhoods = neighborhoods => {
  return {
    type: GET_NEIGHBORHOODS,
    neighborhoods,
  };
};

export const getRestaurants = () => {
  return dispatch => {
    return axios
      .get('/api/restaurants')
      .then(response => response.data)
      .then(restaurants => dispatch(_getRestaurants(restaurants)))
      .catch(error => console.error(error));
  };
};
export const getNeighborhoods = () => {
  return dispatch => {
    return axios
      .get('/api/neighborhoods')
      .then(response => response.data)
      .then(neighborhoods => dispatch(_getNeighborhoods(neighborhoods)))
      .catch(error => console.error(error));
  };
};

const restaurantsReducer = (state = [], action) => {
  switch (action.type) {
    case GET_RESTAURANTS:
      return action.restaurants;
    default:
      return state;
  }
};
const neighborhoodsReducer = (state = [], action) => {
  switch (action.type) {
    case GET_NEIGHBORHOODS:
      return action.neighborhoods;
    default:
      return state;
  }
};

const reducer = combineReducers({
  restaurants: restaurantsReducer,
  neighborhoods: neighborhoodsReducer,
});
const store = createStore(reducer, applyMiddleware(logger, thunk));
export default store;
