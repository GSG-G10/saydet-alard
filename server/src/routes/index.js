const router = require('express').Router();
const {
  checkUserExist,
  setCookie,
  getMainCities,
  signup,
  approvedStory,
  isAdmin,
  checkAuth,
  getDashboardProverbs,
  getProverbs,
} = require('../controllers');

router.get('/', getMainCities);
router.get('/dashboard/proverbs', getDashboardProverbs);
router.get('/proverbs', getProverbs);

router.post('/signup', checkUserExist, signup, setCookie);

router.patch('/dashboard/story', checkAuth, isAdmin, approvedStory);

module.exports = router;
