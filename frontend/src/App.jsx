import { useEffect, useState } from "react";
import axios from "axios";
const backendUrl = import.meta.env.VITE_BACKEND_URL;

const FetchName = () => {
  const [name, setName] = useState([]);
  const getNames = async () => {
    try {
       if (!backendUrl) {
        throw new Error("Backend URL is undefined");
      }
      // const res = await fetch(`${backendUrl}/api`);
      const res = await axios.get(`${backendUrl}/api`);
      // const data = await res.json();   //when you used fetch this is mandatory
      // console.log(data)
      setName(res.data.names);
    } catch (error) {
      console.log("API Error",error);
    }
  };

  useEffect(() => {
    getNames();
  }, []);


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

export default FetchName;
