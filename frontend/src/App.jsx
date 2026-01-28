import { useEffect, useState } from "react";

const URL = "http://localhost:8000/api";

const fetchName = () => {
  const [names, setNames] = useState([]);
  const getNames = async () => {
    try {
      const res = await fetch(URL);
      const data = await res.json();
      setNames(data.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getNames();
  }, [names]);
  return (
    <div>
      <ul>
        {names.map((naam, index) => (
          <li key={index}>{naam}</li>
        ))}
      </ul>
    </div>
  );
};

export default fetchName;
