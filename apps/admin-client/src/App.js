import React, { useState, useEffect } from 'react';

function App() {
  const [data, setData] = useState({ message: '' });

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    //fetch from local server, which will be proxied to the admin-bff
    //this will bypass CORS as it is a server to server conection
    const response = await fetch('/getData');
    const result = await response.json();
    setData(result);
  };

  return (
    <div>
      <h1>React App</h1>
      <p>{data.message}</p>
    </div>
  );
}

export default App;
