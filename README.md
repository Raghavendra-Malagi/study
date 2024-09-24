This is a study file


# Types of testing
    - Unit Testing
    - Integration Testing
    - End to End Testing e-2-e

# Testing
 - We need React Testing Library and Jest to run the test cases


# Installing
 - Installed React testing library
 - Installed Jest
 - Installed Babel dependencies 
 - Configure babel
 -(Parcel uses babel behind the scenes - when we use these babel dependencies parcel also uses babel - there will be conflict btwn parcel and babel since parcel uses babel in the backend we have to make some changes to accomodate the functionalities to perfom testing)
 we want the babel configuration set up for testing to work instead of live application
 -Configure parcel config (.parcelrc) file to disable default babel transpilation
 - jest configuration - npx jest --init
 - Install jsdom library
 - React testing library - setup - jest 28 install depenedncies related to jsdom
 - Inside __test__ - all files insinde it are testing files __ double underscore are called dunder method (a folder with two underscore in the front and two underscroes in the end is called dunder folder)
  we can have Headers.test.js 
                                      Headers.test.ts
                                      Headers.spec.js
                                      Headers.spec.ts
                                      These files are know as testing files
- Install @babel/preset-react- to make JSX work in test cases
- Include @babel/preset-react inside my babel project
- We need to download the testing library related to @testing-library/jest-dom
-npm install --save-dev @testing-library/jest-dom