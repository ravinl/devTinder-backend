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