const getUser = require('./getUser');
const { getMainCitiesQuery, getCitiesNamesQuery } = require('./mainPage');
const checkEmail = require('./checkEmail');
const addNewUser = require('./addNewUser');
const {
  updateStoryQuery, getFamiliesQuery, getUserIdQuery, deleteStoryQuery,
} = require('./cityPage');
const {
  approvePendingStory, editProverbQuery, getDashboardCitiesQuery, getStoriesQuery,
  addProverQuery, deleteProverbDashboardQuery,
} = require('./dashboard');
const getProverbQuery = require('./getProverbQuery');

module.exports = {
  getCitiesNamesQuery,
  getMainCitiesQuery,
  checkEmail,
  addNewUser,
  getStoriesQuery,
  updateStoryQuery,
  getUser,
  getDashboardCitiesQuery,
  getFamiliesQuery,
  approvePendingStory,
  editProverbQuery,
  getProverbQuery,
  addProverQuery,
  getUserIdQuery,
  deleteStoryQuery,
  deleteProverbDashboardQuery,
};
