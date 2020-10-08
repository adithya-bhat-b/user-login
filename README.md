# Category


## How ro run the server

1. Configure the server port in `config.js`.
2. Install the dependancies
```
npm i
```
3. Run the server(DEV)
```
npm run start
```
4. Run the server(PROD)
```
NODE_ENV=production npm run start
```
5. Run the server(TEST)
```
NODE_ENV=test npm run start
```

## APIs for user login and signup

### Login a user
**URL**: *http://{IP}:{PORT}/api/v1/user/login*

**TYPE**: *GET*

**Request headers**
```
{
    "username": "name",
    "password": "password"
}
```
**Resonse body**: 
```
{
    "status": "SUCCESS/FAILURE",
    "data": {Success or Failure Data}
}
```

### User singup

**URL**: *http://{IP}:{PORT}/api/v1/user/signup*

**TYPE**: *POST*

**Request body**: 
```
{
    "userName": "adi",
    "password": "adipass",
    "firstName":"adithya",    
    "lastName": "bhat",
    "email": "adithyabhat.b@gmail.com",
    "gender": "male",
    "country": "India"
}
```
***Response body**:
```
{
    "status": "SUCCESS/FAILURE",
    "data": {Success or Failure Data}
}
```