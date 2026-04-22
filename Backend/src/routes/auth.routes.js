const {Router} = require('express')

const authController = require('../controllers/auth.controller')

const authMiddleWare = require('../middlewares/auth.middleware')

const authRouter = Router();


/**
 * @route POST /api/user/register
 * @description Register a new User
 * @access Public
 */
authRouter.post("/register", authController.registerUserController)

/**
 * @route POST /api/user/login
 * @desciption Login user with Email or password
 * @access Public
 */
authRouter.post("/login", authController.loginUserController);

/**
 * @route GET /api/auth/logout
 * @description clear token from user cookie and add the token in blacklist
 * @access public
 */
authRouter.get("/logout", authController.logoutUserController)

/**
 * @route GET /api/auth/get-me
 * @description get the current logged in user details
 * @access private
 */
authRouter.get("/get-me",authMiddleWare.authUser, authController.getMeController)

module.exports = authRouter;

