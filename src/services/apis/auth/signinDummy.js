
export const signinrequest = {
    "data": {
        "userName": "test@smarte.pro",
        "password": "Admin@123"
    },
    "type" : "SMARTe"
}

export const signin200 = {
    "data": {
        "accessToken": "",
        "enrichToken": "",
        "tokenType": "Bearer"
    },
    "status": {
        "message": "Success",
        "statusCode": 200
    }
}

// (Unauthorized) 
export const signin406 = {
    "status": {
        "message": "User is not active",
        "statusCode": 406
    }
}

// (BadRequest)
export const signin400 = {
    "status": {
        "message": "Bad Credentials",
        "statusCode": 400
    }
}

// (NotAcceptable)
export const signinSSO406 = {
    "status": {
        "message": "SSO Access Denied",
        "statusCode": 406
    }
}

// (Unsupported Media Type)
export const signin415 = {
    "status": {
        "message": "Input's Missing",
        "statusCode": 415
    }
}

export const signin500 = {
    "status": {
        "message": "Technical Failure",
        "statusCode": 500
    }
}