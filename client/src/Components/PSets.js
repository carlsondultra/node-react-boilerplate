import { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const PSets = () => {
  const [PSets, setPSets] = useState(null);

  // This code is executed only once when this component is rendered.
  useEffect(() => {
    const getData = async () => {
      // Get request to fetch data from the backend API.
      const res = await axios.get('/api/psets');
      // View the response data content using Chrome's development tool.
      console.log(res.data);
      // Get the list of PSets from the response data.
      setPSets(res.data);
    }
    getData();
  }, []);

  return(
    <div>
      <h1>List of PSet names</h1>
      {/* If the PSets state object is not null, then display the list of PSet names. */}
      {
        PSets && 
        <ul>
          {
            PSets.map((PSet) => (
              <li key={PSet.name}>{PSet.name}</li>
            ))
          }
        </ul>
      }
    </div>
  );

}

export default PSets;