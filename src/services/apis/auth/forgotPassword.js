export const forgotPasswordRequest = {
    "data": {
        "userName": "test@smarte.pro"
    },
}

export const forgotPassword200 = {
    "status": {
        "message": "User created successfully",
        "statusCode": 200
    }
}

// (Not Acceptable)
export const forgotPasswordSSO406 = {
    "status": {
        "message": "SSO Access Denied",
        "statusCode": 406
    }
}

export const forgotPassword406 = {
    "status": {
        "message": "User Not Found",
        "statusCode": 406
    }
}
