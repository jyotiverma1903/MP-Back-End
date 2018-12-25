const express = require('express');
const router = express.Router();
const userController = require("./../../app/controllers/userController");
const appConfig = require("./../../config/appConfig")
const auth = require('./../middlewares/auth')
const hash=require('../middlewares/hash');

const app = express();

module.exports.setRouter = (app) => {

    let baseUrl = `${appConfig.apiVersion}/users`;


    app.get(`${baseUrl}/view/all`, userController.getAllUser); 

    /**
 * @api {get}  api/v1/users/view/all Api for get User Information
 * @apiVersion 0.0.1
 * @apiName getAllUser
 *@apiGroup users
 * @apiParam {string} authToken the token for  authentication.
 * @apiParam {string} id Users unique ID.
 * 
 * @apiSuccessExample {json} Success-Response
 *    {
    "error": false,
    "message": "All User Details Found",
    "status": 200,
    "data": [
                {
            "createdOn": "2018-08-24T13:40:05.000Z",
            "active": false,
            "hash": "19yh1h543xmhk9z2wwukpphbi9r73wojbw",
            "countryCode": "91",
            "phoneNumber": "1234567890",
            "emailId": "rikswish29@gmail.com",
            "password": "$2a$10$MTuPlG4fwJxYmNDHth4s5uxTt5hQDQ6fWnlmXc.gTFu3XIuVpkMqa",
            "lastName": "savita",
            "firstName": "varun",
            "admin": "no",
            "userId": "ejtcfRwFA"
        }
    ]
 * }
 * @apiErrorExample {json} Error-Response;
 * {
 *   "error" : true,
 *   "message" : "Error Occured",
 *   "Status" : "500",
 *   "data" : null
 * }
 */

   // app.get(`${baseUrl}/:userId/details`, auth.isAuthorized, userController.getSingleUser);

    
    app.post(`${baseUrl}/signup`, hash.hash, userController.signUpFunction);

       /**
 * @api {post}  api/v1/users/signup Api for signup request
 * @apiVersion 0.0.1
 * @apiName signup
 *@apiGroup users
 * @apiParam {string} signup user as a normal or admin
 * @apiParam {string} id Users unique ID.
 * @apiSuccessExample {json} Success-Response
 *   
 * {
    "error": false,
    "message": "User created",
    "status": 200,
    "data": {
        "__v": 0,
        "_id": "5b80e863412f79184ab974f9",
        "createdOn": "2018-08-25T05:25:55.000Z",
        "active": false,
        "hash": "78zi15lxaw3wspsz4br0aik6kj9pjdk6",
        "countryCode": "91",
        "phoneNumber": "0987654321",
        "emailId": "123@xyz.com",
        "lastName": "savita",
        "firstName": "varun",
        "admin": "admin",
        "userId": "xCqvwsVLr"
    }
}
 * @apiErrorExample {json} Error-Response;
 * {
 *   "error" : true,
 *   "message" : "Error Occured",
 *   "Status" : "500",
 *   "data" : null
 * }
 */

    app.post(`${baseUrl}/verify`, userController.verifyEmail);


       /**
 * @api {post}  api/v1/users/verify Api for request verify user
 * @apiVersion 0.0.1
 * @apiName signup
 *@apiGroup users
 * @apiParam {string} signup user as a normal or admin
 * @apiParam {string} id Users unique ID.
 * @apiSuccessExample {json} Success-Response
 *   
 * {
    "error": false,
    "message": "User Verified Successfully.",
    "status": 200,
    "data": {
        "n": 1,
        "nModified": 1,
        "ok": 1
    }
}
 * @apiErrorExample {json} Error-Response;
 * {
 *   "error" : true,
 *   "message" : "Error Occured",
 *   "Status" : "500",
 *   "data" : null
 * }
 */
    
    

    app.post(`${baseUrl}/login`, userController.loginFunction);

        /**
 * @api {get}  api/v1/users/login Api for User login
 * @apiVersion 0.0.1
 * @apiName verify Email
 *@apiGroup users
 * @apiParam {string} verify user 
 * @apiSuccessExample {json} Success-Response
 *   
 * {
    "error": false,
    "message": "User Verified Successfully.",
    "status": 200,
    "data": {
        "n": 1,
        "nModified": 1,
        "ok": 1
    }
}
 * @apiErrorExample {json} Error-Response;
 * {
 *   "error" : true,
 *   "message" : "Error Occured",
 *   "Status" : "500",
 *   "data" : null
 * }
 */
    

    app.post(`${baseUrl}/forgotpassword`,userController.forgotPassword);

        /**
 * @api {get}  api/v1/users/forgotpassword Api for forget password
 * @apiVersion 0.0.1
 * @apiName forgot password
 *@apiGroup users
 * @apiParam {string} sent email on your emailId
 * @apiSuccessExample {json} Success-Response
 *   
 *{
    "error": false,
    "message": "Mail Sent Successful!",
    "status": 200,
    "data": null
}
 * @apiErrorExample {json} Error-Response;
 * {
 *   "error" : true,
 *   "message" : "Error Occured",
 *   "Status" : "500",
 *   "data" : null
 * }
 */
    
    app.post(`${baseUrl}/changepassword`,userController.resetPassword);

           /**
 * @api {get}  api/v1/users/forgotpassword Api for Password change
 * @apiVersion 0.0.1
 * @apiName forgot password
 *@apiGroup users
 * @apiParam {string} sent email on your emailId
 * @apiSuccessExample {json} Success-Response
 *  
 * {
    "error": false,
    "message": "Password changed successfully!",
    "status": 200,
    "data": {
        "_id": "5b8008d43715804f68370564",
        "__v": 0,
        "createdOn": "2018-08-24T13:32:04.000Z",
        "active": false,
        "hash": "vtb0209zg18sfvhg80xhuaxbj524qgbp",
        "countryCode": "91",
        "phoneNumber": "0987654321",
        "emailId": "rikswish29@gmail.com",
        "password": "$2a$10$SyY1i27q1XudwYShPRg10eTU.6lvfIa53ShMUQxa73V1.I5Z9RhiS",
        "lastName": "savita",
        "firstName": "varun",
        "admin": "admin",
        "userId": "FWMCkevu8"
    }
} 

 * @apiErrorExample {json} Error-Response;
 * {
 *   "error" : true,
 *   "message" : "Error Occured",
 *   "Status" : "500",
 *   "data" : null
 * }
 */

    app.get(`${baseUrl}/view/all/normal`, userController.getAllNormalUser);

   // app.put(`${baseUrl}/:userId/edit`, auth.isAuthorized, userController.editUser);

    //app.post(`${baseUrl}/:userId/delete`, auth.isAuthorized, userController.deleteUser);

    app.post(`${baseUrl}/logout`, auth.isAuthorized, userController.logout);
}
