import React, {useState} from "react";




const Table = () => {
    const[data, setData] = useState({});
  

  
    

    
    return (
        <>
        <table>
            <tr>
                <th>Salutation</th>
                <th>Name</th>
                <th>DoB</th>

            </tr>
            <tr>
                <td> <select>
                    <option>Front end Developer</option>
                    <option>Backenf Developer</option>
                    <option> Full stack developer</option>
                    </select></td>
                <td>
                    
                    
                </td>
                <td></td>
               
               
            </tr>
        </table>
        </>
    )
}