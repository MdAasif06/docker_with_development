import { useEffect, useState } from "react";
import axios from "axios";
const URL = "http://localhost:8000/api";

const fetchName = () => {
  const [name, setNames] = useState([]);
  const getNames = async () => {
    try {
      // const res = await fetch(URL);
      const res = await axios.get(URL);
      // const data = await res.json();
      setNames(res.data.names);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getNames();
  }, [name]);


  return (
    <div>
      <h2>Names</h2>
      <ul>
        {name.map((naam, index) => (
          <li key={index}>{naam}</li>
        ))}
      </ul>
    </div>
  );
};

export default fetchName;
