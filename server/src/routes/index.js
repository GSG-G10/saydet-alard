const router = require('express').Router();
const {
  checkUserExist, setCookie, getMainCities, signup, approvedStory, isAdmin, checkAuth,
} = require('../controllers');

router.get('/', getMainCities);

router.post('/signup', checkUserExist, signup, setCookie);

router.patch('/dashboard/story', checkAuth, isAdmin, approvedStory);

module.exports = router;
