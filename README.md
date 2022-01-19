# amazon-clone-project
## Build an Amzon website clone with ReactJS and Firebase.

You will need to use:
- A terminal
- npm (sudo apt install nodejs npm)
- Firebase
- VSCode (Recommended)

Sketch of the project structure:
- "src" is the front-end
- "functions" is the full back-end

### SETUP the project on your computers (using Linux as a running exmaple):
- The **CURRENT** folder is the folder where you can see "README.md  node_modules  package.json  package-lock.json  public  README.md  src" by typing in "ls". For all the "type in" steps below, make sure you do them in the **CURRENT** folder.
- Type in "npm install firebase".
- Type in "sudo npm install -g firebase-tools"
- Go to Firebase to create a project.
- Go to "project settings" of your newly created Firebase project.
- Find "Firebase SDK snippet", click "Config", copy the code below, open "firebase.js", replace corresponding code with your copied code.
- Type in "npm install @material-ui/core @material-ui/icons".
- Type in "npm install react-router-dom react-currency-format".
- Type in "npm i @stripe/stripe-js @stripe/react-stripe-js".
- Type in "npm i axios".
- Go to the "functions" folder, Type in "npm i express" and "npm install stripe --save".
- Type in "npm start" and wait for the webpage of your localhost. You will see a website. Then you are ready for deploying the website.

### DEPLOY the app:
<!-- - Type in "firebase init" -->
- Type in "npm run build"
- Type in "firebase deploy"
- Copy the URL for the app and open it in your browser. You will see an Amazon website clone.

<!-- ### CREATE the back-end:
- Type in "firebase init".
- Select "Functions", then select "JavaScript", press "Y" twice.
- Go to the "functions" folder, Type in "npm i express". -->

