# About this app

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app), for the Rheonics frontend coding challenge.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

## Overall Structure
This Website page was populated with API Data from [TheOneAPI](https://the-one-api.dev/) as a single page application.

The page holds three states for the books, movies and characters data gotten from the API and one Header made with [Material UI](https://mui.com/) sticked to the top of the Website. This Header could be used to add a Search or Login features or a Menu if there's more need of content.

For the error in fetching data there are try catch functions inside the ApiFetch function to avoid crashes. Errors can be seen in the Console.

If any doubts, or if in the need for more information, feel free to contact me at jepach@gmail.com.

## Libraries used

For Global Developing:
- React.js
- Node.js version 16.15.1 LTS
- npm version 8.11.0

For CSS handling within JavaScript:
- emotion/styled
- emotion/css
- mui/material

For unit testing:
- react-testing-library/jest-dom
