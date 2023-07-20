import './App.css';

function App() {
  function validate(str, maxLength) {
    // checking for the maximum length
    if(str.length > maxLength) {
      return false;
    }

    // RegEx for password validation
    const regex  = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~])[A-Za-z\d!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~]{0,}$/;

    // return true if the password meets the criteria, otherwise false
    return regex .test(str);
  }



  return (
    <main className="App">
      <h1>Validator</h1>

      <dl>
        <dt><code>validate('Test123#', 10)</code> expected True</dt>
        <dd>Result: {validate('Test123#', 10).toString()}</dd>
      </dl>

      <dl>
        <dt><code>validate('Test123#Extra', 10)</code> expected False - Exceeds maxLength</dt>
        <dd>Result: {validate('Test123#Extra', 10).toString()}</dd>
      </dl>

      <dl>
        <dt><code>validate('test123#', 10)</code> expected False - No uppercase letter</dt>
        <dd>Result: {validate('test123#', 10).toString()}</dd>
      </dl>

      <dl>
        <dt><code>validate('TEST123#', 10)</code> expected False - No lowercase letter</dt>
        <dd>Result: {validate('TEST123#', 10).toString()}</dd>
      </dl>

      <dl>
        <dt><code>validate('Testtest#', 10)</code> expected False - No digit</dt>
        <dd>Result: {validate('Testtest#', 10).toString()}</dd>
      </dl>

      <dl>
        <dt><code>validate('Test123test', 10)</code> expected False - No special character</dt>
        <dd>Result: {validate('Test123test', 10).toString()}</dd>
      </dl>

      <dl>
        <dt><code>validate('Test 123#', 10)</code> expected False - Contains whitespace</dt>
        <dd>Result: {validate('Test 123#', 10).toString()}</dd>
      </dl>

      <dl>
        <dt><code>validate('', 10)</code> expected False - Empty string</dt>
        <dd>Result: {validate('', 10).toString()}</dd>
      </dl>

      <dl>
        <dt><code>validate('T', 10)</code> expected False - Does not meet any condition except having an uppercase letter</dt>
        <dd>Result: {validate('T', 10).toString()}</dd>
      </dl>

      <dl>
        <dt><code>validate('Test123#ExtraLongPassword', 10)</code> expected False - Exceeds maxLength and no special character</dt>
        <dd>Result: {validate('Test123#ExtraLongPassword', 10).toString()}</dd>
      </dl>
    </main>
  );
}

export default App;
