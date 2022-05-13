import {useEffect} from 'react';


function App() {
  useEffect(() => {
    console.log("useeffect");
    // (async () => {
    //   const response = await fetch('http://localhost:3002/cookie');
    //   const body = await response.json();
    //   console.log(body);
    // })()
    fetch("http://localhost:3002/cookie", {
      // credentials: "include",
    }).then(console.log)
  })
  return (
    <div className="App">
      <p>TEST PARAGRAPH</p>
    </div>
  );
}

export default App;
