import React, { useState, useEffect } from "react";

const GetApiData = () => {
  const [items, setItems] = useState([]);
  const [dataIsLoaded, setDataIsLoaded] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/users"
        );
        const result = await response.json();
        console.log("i have a result", result);
        setItems(result);
        setDataIsLoaded(true);
      } catch (error) {
        setError(error);
      }
    };

    fetchData();
  }, []);
  if (!dataIsLoaded) {
    return (
      <div>
        <h1>Please wait some time....</h1>
      </div>
    );
  }
  return (
    <div>
      <h3>Fetch data from an API in React</h3>
      <div>
        {items.map((item) => (
          <div key={item.id}>
            <ol>
              <div>
                <strong>User_Name: </strong>
                {item.username},
              </div>
              <div>Full_Name: {item.name}</div>
              <div>User_Email: {item.email}</div>
            </ol>
          </div>
        ))}
      </div>
    </div>
  );
};
export default GetApiData;
