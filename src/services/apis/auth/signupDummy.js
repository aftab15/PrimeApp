export const signupRequest = {
    "data": {
        "userName": "test@smarte.pro"
    }
}

export const signup200 = {
    "status": {
        "message": "User created successfully",
        "statusCode": 200
    }
}

export const signup406 = {
    "status": {
        "message": "This User already exists, Please try to login.",
        "statusCode": 406
    }
}

export const signupInvalid406 = {
    "status": {
        "message": "Please provide valid input.",
        "statusCode": 406
    }
}

