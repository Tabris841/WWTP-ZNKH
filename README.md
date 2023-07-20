## React Validator

This React application serves as a reliable tool for validating string inputs based on predefined regular expressions. Users simply enter their string, and the application checks it against a series of custom validation rules.

### Regex implementation description:

```
^: Start of the line.
(?=.*[a-z]): Lookahead to make sure there's at least one lowercase letter.
(?=.*[A-Z]): Lookahead to make sure there's at least one uppercase letter.
(?=.*\d): Lookahead to make sure there's at least one digit.
(?=.*[!"#$%&'()*+,-./:;<=>?@[\]^_{|}~])`: Lookahead to make sure there's at least one special character from the list.
[A-Za-z\d!"#$%&'()*+,-./:;<=>?@[\]^_{|}~]{0,}$: Matches any string that contains only the characters inside the square brackets. The {0,}means it should match zero or more of the preceding element.$` is the end of the line.
```

### In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.
