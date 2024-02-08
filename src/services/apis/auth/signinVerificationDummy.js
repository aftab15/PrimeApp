export const signinVerificationRequest = {
    "data": {
        "userName": "test@smarte.pro",
        "password": "Admin@123"
    },
    "type" : "SSO"
}

export const signin200 = {
    "data": {
        "ssoEnabled": "",
        "idpLoginUrl": "",
        "idpLogoutUrl": ""
    },
    "status": {
        "message": "Success",
        "statusCode": 200
    }
}

export const signinSSO406 = {
    "status": {
        "message": "SSO Not Enabled",
        "statusCode": 406
    }
}

export const signin406 = {
    "status": {
        "message": "User is not Active",
        "statusCode": 406
    }
}
