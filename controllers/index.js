const db  = require("../models");
module.exports = {
    // User login
    userLogin: async (req, res) => {
        const response = {
            status: "SUCCESS",
            data: null
        };
        const userData = req.headers;
        let userDbData;
        try{
            userDbData = await db.User.findOne({
                where: {
                    userName: userData.username,
                    password: userData.password
                }
            });
        }
        catch(err){
            console.error(`User login error for: ${userData.username}, Error: ${JSON.stringify(err)}`);
            response.status = "FAILURE";
            response.data = err;
            return res.json(response);
        }
        if (userDbData === null) {
            response.status = "FAILURE";
            response.data = "User doesn't exist.";
        }
        else {
            response.data = userDbData;
        }
        console.log(`User login response: ${JSON.stringify(response)}`)
        return res.json(response);
    },
    // User signup
    userSignUp: async (req, res) => {
        const response = {
            status: "SUCCESS",
            data: null
        }
        let reqBody = req.body;

        if (typeof reqBody == "string") {
            reqBody = JSON.parse(reqBody);
        }
        const { 
            userName, 
            password, 
            firstName, 
            lastName, 
            email, 
            gender, 
            country } = reqBody;
        let createdUser;
        try{
            createdUser = await db.User.create({
                userName,
                password, 
                firstName, 
                lastName, 
                email, 
                gender, 
                country
            });
        }
        catch(err){
            console.error(`Unable to create user, Error: ${JSON.stringify(err)}`);
            response.status = "FAILURE";
            response.data = err;
            return res.json(response);
        }
        console.log(`User signup is successful, Details: ${JSON.stringify(createdUser)}`);
        response.data = createdUser;
        return res.json(response);
    }
}