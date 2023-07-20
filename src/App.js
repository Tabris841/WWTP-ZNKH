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
    </main>
  );
}

export default App;
