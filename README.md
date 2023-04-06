# node-react-boilerplate
A boilerplate for web application projects using Node.js Express as backend and React as frontend.

## Getting Started

- Clone the node-react-boilerplate project.

```bash
git clone git@github.com:carlsondultra/node-react-boilerplate.git
cd node-react-boilerplate
```

- Assuming you are using VS Code or any code editor, open the root directory of the app.
- Create a .env file and add the following content:

```bash
NODE_ENV=development
PORT=2000
CONNECTION_STR=PASTE_YOUR_MONGODB_CONNECTION_STRING_HERE
```

- Open a terminal at the root directory, run npm install to install all the dependencies.
- Once all the dependencies are installed, run npm run devstart to start the backend server.
- Open a browser and go to [http://localhost:2000/api/test](http://localhost:2000/api/test) to see if the backend server is running properly. You should see {"status":"ok"} on the browser window.
- Open another terminal, go to the client directory.
- Run npm install in the client directory. It will install all the dependencies for the frontend. 
- Once done, run npm start. You will see the frontend open on your browser. 
- After all the steps above are done, you should have the backend API running on localhost:2000 and the frontend running on localhost:3000.
- To terminate each server, go to each terminal and stop the server with Crtl + C.

## It is often advisable to not hard-code any information directly used in the codebase that could be a security risk such as database connection strings, tokens and API endpoints. How can this be done?

This can be done by using .env files where the database connection strings, tokens, api endpoints, etc. are environment variables, and then the programmer will have to input their own manually. The .env files can be added to a .gitignore file so that the .env files are not accidentally committed/pushed onto the repository. .env files provide both security and flexibility, since all the private information (database connection strings, tokens, etc…) can all be modified in one file.
