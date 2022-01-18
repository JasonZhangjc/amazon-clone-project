# amazon-clone-project
## Build an Amzon website clone with ReactJS and Firebase.

You will need to use:
- A terminal
- npm (sudo apt install nodejs npm)
- Firebase
- VSCode (Recommended)

### SETUP the project on your computers (using Linux as a running exmaple):
- The **CURRENT** folder is the folder where you can see "README.md  node_modules  package.json  package-lock.json  public  README.md  src" by typing in "ls". For all the "type in" steps below, make sure you do them in the **CURRENT** folder.
- Go to Firebase to create a project.
- Type in "npm install firebase"
- Type in "sudo npm install -g firebase-tools"
- Go to "project settings" of your newly created Firebase project.
- Find "Firebase SDK snippet", click "Config", copy the code below, open "firebase.js", replace corresponding code with your copied code.
- Type in "npm install @material-ui/core @material-ui/icons"
- Type in "npm install react-router-dom react-currency-format"
- Type in "npm start" and wait for the webpage of your localhost. You will see a website. Then you are ready for deploying the website.

### DEPLOY the app:
- Type in "firebase init"
- Type in "npm run build"
- Type in "firebase deploy"
- Copy the URL for the app and open it in your browser. You will see an Amazon website clone.

