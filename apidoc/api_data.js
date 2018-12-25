define({ "api": [
  {
    "type": "post",
    "url": "api/v1/meeting/addMeeting",
    "title": "Api to Add meeting",
    "version": "0.0.1",
    "name": "Add_meeting",
    "group": "Meetings",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "authToken",
            "description": "<p>the token for  authentication.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "id",
            "description": "<p>Users unique ID.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response",
          "content": "   {\n    \"error\": false,\n    \"message\": \"All Meeting Details Found\",\n    \"status\": 200,\n    \"data\": [\n                {\n                   \"meetingId\" : \"gdhasrg\",\n                    \"userId\" : \"g9VncDKE9\",\n                    \"userName\" : \"jverma\",\n                    \"adminName\" : \"rikswish\",\n                    \"adminId\" : \"gsgaga\",\n                    \"Date\" : \"12/22/2018\",\n                    \"time\" : \"20.00\",\n                    \"countryCode\" : \"91\",\n                    \"where\" : \"pune\"            \n        }\n    ]\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response;",
          "content": "{\n  \"error\" : true,\n  \"message\" : \"Error Occured\",\n  \"Status\" : \"500\",\n  \"data\" : null\n}",
          "type": "json"
        }
      ]
    },
    "filename": "app/routes/metting.js",
    "groupTitle": "Meetings"
  },
  {
    "type": "post",
    "url": "/api/v1/meeting/getAllMeetingForUser",
    "title": "Api for get all meetings of user",
    "version": "0.0.1",
    "name": "All_meeting_information",
    "group": "Meetings",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "authToken",
            "description": "<p>the token for  authentication.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "id",
            "description": "<p>Users unique ID.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response",
          "content": "   {\n    \"error\": false,\n    \"message\": \"All Meeting Details Found\",\n    \"status\": 200,\n    \"data\": [\n                {\n                    \"meetingId\" : \"gdh\",\n                    \"userId\" : \"g9VncDKE9\",\n                    \"userName\" : \"jverma\",\n                    \"adminName\" : \"rikswish\",\n                    \"adminId\" : \"gsgaga\",\n                    \"Date\" : \"12/22/2018\",\n                    \"time\" : \"20.00\",\n                    \"countryCode\" : \"91\",\n                    \"where\" : \"pune\"           \n        }\n    ]\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response;",
          "content": "{\n  \"error\" : true,\n  \"message\" : \"Error Occured\",\n  \"Status\" : \"500\",\n  \"data\" : null\n}",
          "type": "json"
        }
      ]
    },
    "filename": "app/routes/metting.js",
    "groupTitle": "Meetings"
  },
  {
    "type": "post",
    "url": "api/v1/meeting/deleteMeeting",
    "title": "Api to delete meeting",
    "version": "0.0.1",
    "name": "Delete_meeting",
    "group": "Meetings",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "authToken",
            "description": "<p>the token for  authentication.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "id",
            "description": "<p>Users unique ID.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response",
          "content": "   {\n    \"error\": false,\n    \"message\": \"All Meeting Details Found\",\n    \"status\": 200,\n    \"data\": [\n                {\n                    \"delete\" : \"Succesfully Deleted\"           \n        }\n    ]\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response;",
          "content": "{\n  \"error\" : true,\n  \"message\" : \"Error Occured\",\n  \"Status\" : \"500\",\n  \"data\" : null\n}",
          "type": "json"
        }
      ]
    },
    "filename": "app/routes/metting.js",
    "groupTitle": "Meetings"
  },
  {
    "type": "post",
    "url": "/api/v1/meeting/getMeetingByMeetingId",
    "title": "Api for User meeting by Meeting ID",
    "version": "0.0.1",
    "name": "Meeting_info_by_meeting_id",
    "group": "Meetings",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "authToken",
            "description": "<p>the token for  authentication.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "id",
            "description": "<p>Users unique ID.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response",
          "content": "   {\n    \"error\": false,\n    \"message\": \"All Meeting Details Found\",\n    \"status\": 200,\n    \"data\": [\n                {\n                    \"meetingId\" : \"gdhasrg\",\n                    \"userId\" : \"g9VncDKE9\",\n                    \"userName\" : \"jverma\",\n                    \"adminName\" : \"rikswish\",\n                    \"adminId\" : \"gsgaga\",\n                    \"Date\" : \"12/22/2018\",\n                    \"time\" : \"20.00\",\n                    \"countryCode\" : \"91\",\n                    \"where\" : \"pune\"            \n        }\n    ]\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response;",
          "content": "{\n  \"error\" : true,\n  \"message\" : \"Error Occured\",\n  \"Status\" : \"500\",\n  \"data\" : null\n}",
          "type": "json"
        }
      ]
    },
    "filename": "app/routes/metting.js",
    "groupTitle": "Meetings"
  },
  {
    "type": "post",
    "url": "api/v1/meeting/updateMeeting",
    "title": "Api to update meeting",
    "version": "0.0.1",
    "name": "Update_meeting",
    "group": "Meetings",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "authToken",
            "description": "<p>the token for  authentication.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "id",
            "description": "<p>Users unique ID.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response",
          "content": "   {\n    \"error\": false,\n    \"message\": \"All Meeting Details Found\",\n    \"status\": 200,\n    \"data\": [\n                {\n                    \"update\" : \"Meeting update successfully\"         \n        }\n    ]\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response;",
          "content": "{\n  \"error\" : true,\n  \"message\" : \"Error Occured\",\n  \"Status\" : \"500\",\n  \"data\" : null\n}",
          "type": "json"
        }
      ]
    },
    "filename": "app/routes/metting.js",
    "groupTitle": "Meetings"
  },
  {
    "type": "get",
    "url": "api/v1/users/forgotpassword",
    "title": "Api for Password change",
    "version": "0.0.1",
    "name": "forgot_password",
    "group": "users",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "sent",
            "description": "<p>email on your emailId</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response",
          "content": " \n{\n    \"error\": false,\n    \"message\": \"Password changed successfully!\",\n    \"status\": 200,\n    \"data\": {\n        \"_id\": \"5b8008d43715804f68370564\",\n        \"__v\": 0,\n        \"createdOn\": \"2018-08-24T13:32:04.000Z\",\n        \"active\": false,\n        \"hash\": \"vtb0209zg18sfvhg80xhuaxbj524qgbp\",\n        \"countryCode\": \"91\",\n        \"phoneNumber\": \"0987654321\",\n        \"emailId\": \"rikswish29@gmail.com\",\n        \"password\": \"$2a$10$SyY1i27q1XudwYShPRg10eTU.6lvfIa53ShMUQxa73V1.I5Z9RhiS\",\n        \"lastName\": \"savita\",\n        \"firstName\": \"varun\",\n        \"admin\": \"admin\",\n        \"userId\": \"FWMCkevu8\"\n    }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response;",
          "content": "{\n  \"error\" : true,\n  \"message\" : \"Error Occured\",\n  \"Status\" : \"500\",\n  \"data\" : null\n}",
          "type": "json"
        }
      ]
    },
    "filename": "app/routes/user.js",
    "groupTitle": "users"
  },
  {
    "type": "get",
    "url": "api/v1/users/forgotpassword",
    "title": "Api for forget password",
    "version": "0.0.1",
    "name": "forgot_password",
    "group": "users",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "sent",
            "description": "<p>email on your emailId</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response",
          "content": "  \n{\n    \"error\": false,\n    \"message\": \"Mail Sent Successful!\",\n    \"status\": 200,\n    \"data\": null\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response;",
          "content": "{\n  \"error\" : true,\n  \"message\" : \"Error Occured\",\n  \"Status\" : \"500\",\n  \"data\" : null\n}",
          "type": "json"
        }
      ]
    },
    "filename": "app/routes/user.js",
    "groupTitle": "users"
  },
  {
    "type": "get",
    "url": "api/v1/users/view/all",
    "title": "Api for get User Information",
    "version": "0.0.1",
    "name": "getAllUser",
    "group": "users",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "authToken",
            "description": "<p>the token for  authentication.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "id",
            "description": "<p>Users unique ID.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response",
          "content": "   {\n    \"error\": false,\n    \"message\": \"All User Details Found\",\n    \"status\": 200,\n    \"data\": [\n                {\n            \"createdOn\": \"2018-08-24T13:40:05.000Z\",\n            \"active\": false,\n            \"hash\": \"19yh1h543xmhk9z2wwukpphbi9r73wojbw\",\n            \"countryCode\": \"91\",\n            \"phoneNumber\": \"1234567890\",\n            \"emailId\": \"rikswish29@gmail.com\",\n            \"password\": \"$2a$10$MTuPlG4fwJxYmNDHth4s5uxTt5hQDQ6fWnlmXc.gTFu3XIuVpkMqa\",\n            \"lastName\": \"savita\",\n            \"firstName\": \"varun\",\n            \"admin\": \"no\",\n            \"userId\": \"ejtcfRwFA\"\n        }\n    ]\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response;",
          "content": "{\n  \"error\" : true,\n  \"message\" : \"Error Occured\",\n  \"Status\" : \"500\",\n  \"data\" : null\n}",
          "type": "json"
        }
      ]
    },
    "filename": "app/routes/user.js",
    "groupTitle": "users"
  },
  {
    "type": "post",
    "url": "api/v1/users/verify",
    "title": "Api for request verify user",
    "version": "0.0.1",
    "name": "signup",
    "group": "users",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "signup",
            "description": "<p>user as a normal or admin</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "id",
            "description": "<p>Users unique ID.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response",
          "content": "  \n{\n    \"error\": false,\n    \"message\": \"User Verified Successfully.\",\n    \"status\": 200,\n    \"data\": {\n        \"n\": 1,\n        \"nModified\": 1,\n        \"ok\": 1\n    }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response;",
          "content": "{\n  \"error\" : true,\n  \"message\" : \"Error Occured\",\n  \"Status\" : \"500\",\n  \"data\" : null\n}",
          "type": "json"
        }
      ]
    },
    "filename": "app/routes/user.js",
    "groupTitle": "users"
  },
  {
    "type": "post",
    "url": "api/v1/users/signup",
    "title": "Api for signup request",
    "version": "0.0.1",
    "name": "signup",
    "group": "users",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "signup",
            "description": "<p>user as a normal or admin</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "id",
            "description": "<p>Users unique ID.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response",
          "content": "  \n{\n    \"error\": false,\n    \"message\": \"User created\",\n    \"status\": 200,\n    \"data\": {\n        \"__v\": 0,\n        \"_id\": \"5b80e863412f79184ab974f9\",\n        \"createdOn\": \"2018-08-25T05:25:55.000Z\",\n        \"active\": false,\n        \"hash\": \"78zi15lxaw3wspsz4br0aik6kj9pjdk6\",\n        \"countryCode\": \"91\",\n        \"phoneNumber\": \"0987654321\",\n        \"emailId\": \"123@xyz.com\",\n        \"lastName\": \"savita\",\n        \"firstName\": \"varun\",\n        \"admin\": \"admin\",\n        \"userId\": \"xCqvwsVLr\"\n    }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response;",
          "content": "{\n  \"error\" : true,\n  \"message\" : \"Error Occured\",\n  \"Status\" : \"500\",\n  \"data\" : null\n}",
          "type": "json"
        }
      ]
    },
    "filename": "app/routes/user.js",
    "groupTitle": "users"
  },
  {
    "type": "get",
    "url": "api/v1/users/login",
    "title": "Api for User login",
    "version": "0.0.1",
    "name": "verify_Email",
    "group": "users",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "verify",
            "description": "<p>user</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response",
          "content": "  \n{\n    \"error\": false,\n    \"message\": \"User Verified Successfully.\",\n    \"status\": 200,\n    \"data\": {\n        \"n\": 1,\n        \"nModified\": 1,\n        \"ok\": 1\n    }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response;",
          "content": "{\n  \"error\" : true,\n  \"message\" : \"Error Occured\",\n  \"Status\" : \"500\",\n  \"data\" : null\n}",
          "type": "json"
        }
      ]
    },
    "filename": "app/routes/user.js",
    "groupTitle": "users"
  }
] });
