const { getMainCities, getProverbs } = require('./main');
const { signup } = require('./Auth');
const {
  checkUserExist, setCookie, isAdmin, checkAuth,
} = require('./middlewares');
const { approvedStory, getDashboardProverbs } = require('./dashboard');

module.exports = {
  getMainCities,
  signup,
  checkUserExist,
  setCookie,
  isAdmin,
  checkAuth,
  getProverbs,
  approvedStory,
  getDashboardProverbs,
};
