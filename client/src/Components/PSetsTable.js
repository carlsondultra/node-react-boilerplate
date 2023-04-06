import { useState, useEffect } from 'react';
import axios from 'axios';
import '../Styles/Table.css'


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
      <h1>List of PSets Table</h1>
      {/* If the PSets state object is not null, then display the table of PSet name's and doi's. */}
      {
        PSets && 
        <table>
            {/* Creating the table header values */}
            <thead>
                <tr>
                    <th>PSet Name</th>
                    <th>PSet DOI</th>
                </tr>
            </thead>
            <tbody>
            {/* Mapping through the PSets in order to obtain name and doi. */}
            {PSets.map((PSet)=> (
                        <tr>
                            <td>{(PSet.name)}</td>
                            {/* Allowing the link to be clickable on the table */}
                            <td><a href={('https://doi.org/' + PSet.doi)}>{('https://doi.org/' + PSet.doi)}</a></td>
                        </tr>
                    ))}
            </tbody> 
        </table>
      }
    </div>
  );

}

export default PSets;