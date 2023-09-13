# Password Strength Checker React Component

This is a React component that checks the strength of a password entered by the user and provides feedback based on certain criteria.

## Features

- Password length must be at least 8 characters.
- Password must include at least one uppercase and one lowercase letter.
- Password must include at least one digit.
- Password must include at least one special character from `!@#$%&*()`.
- Password should not contain repeating characters like `123...`.

## Usage

To use this component in your React application, follow these steps:

1. Install React if you haven't already:

   ```shell
   npx create-react-app my-password-checker-app
2. Copy the Password.js file into your project's components folder.

3. Import and use the Password component in your application:
        import React from "react";
        import Password from "./components/Password"; // Adjust the path as needed

        function App() {
        return (
            <div className="App">
            <Password />
            </div>
        );
        }

        export default App;

4. Style the component and add CSS classes as needed. You can customize the appearance by editing the provided CSS file.

5. Run your React application:
     ```shell
     npm start
6. Open your browser and go to http://localhost:3000 to see the Password Strength Checker component in action.
