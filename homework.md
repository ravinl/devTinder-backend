**\*\***\***\*\*** 12/05/2025 \***\*\*\*\*\*\*\***

-- Season-2 / Episode-3

- Create a repository
- Initialize the repository
- node_modules, package.json, package-lock.json
- install express
- Create a server
- Listen to any port
- write request handlers for /test , /hello
- Read about
  - what happens when we use /anything if we have only request handler for /
  - what happens when we use /otherthandefined if we have only request handlers for / , /test , /hello

-- Season-2 / Episode-4

- initialize git
- .gitignore
- Create a remote repository on github
- Push all the codes of this repository to the remote repository
- Find out if the sequence of the routes matter?
  - Is the followings are same?
    A.
    - /hello
    - /test
    - /
      B.
    - /
    - /hello
    - /test
- Regular expressions in routes
  - ab?c means now b is optional
  - ab+c 1 or more b is valid
  - ab\*c 0 or more b is valid
- Regex in routes
  - /a/ : if a is there in the route string then it will work(car,man, etc.)
  - Read about Regex in more details.
- How to get the query parameters in request handler?
  - req.query
- How to handle dynamic API
  - req.params

-- season-2 Episode-5

- Multiple route handlers
- next()
- next function and errors along with res.send()
- app.use("/route", rH1, [rH2, rH3, ......], rH23232, .......) // rH: route Handler

- What is middlewares? And why we need it?
- How express basically handles requests behind the scenes
- Difference between app.use and app.all

- Read about callback / promise / try-catch

-- Season-2 Episode-6

- Create a free cluster on MongoDB official website (MongoDB Atlas)
- install mongoose library
- connect your application to the database (<"ConnectionURL"/devTinder>)
- listen to the request only after your database connected successfully
- create a user schema
- create userModel
- Create POST/sign-up API to add data to database
- Push some documents using API calls using POSTMAN
- Error handling using Try/Catch


-- Season-2 Episode: 7

- JS object VS json (difference)
- Add the express.json middleware to your app [For What?]
- Make your sign-up API dynamic to receive the data from the end user
- If you have more than one data with the same emailId AND you use userModel.findOne({email: value}) which data will be returned?
- what will be the output for userModel.findOne() [with no conditions]?
- create API get/user
- create API get/users
- create API post/login
- findAndUpdate / findById and update
- updateOne [to update one or multiple field of one user]
- updateMany [to update one or multiple fields of one or more user] ***** Use it when needed *****
