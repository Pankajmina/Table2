import React from 'react';
import Edit3 from '../components/Edit3';
import Add3 from '../components/Add3';
import Delete3 from '../components/Delete3';


function Table(props) {

  const table = props.table
  return (
    <>
         <div className='d-flex justify-content-start'>
             <Edit3/>
             <Add3/>
             <Delete3/>
             </div>
      <label className="Display-4"><h2>Student Table</h2></label>
      <table className="table table-hover table-bordered">
        <thead className="thead">
          <tr>
            <th>S/N</th>
            
            <th>Roll Number</th>
            <th>Class</th>
           
          </tr>
        </thead>
        <tbody className='tbody'>
          {table.map((item, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
          
              <td>
                <input className="form-control" type='number' min={1} max={100} required placeholder="Roll Number"
                  value={item.rollnumber}
                />
              </td>
              <td>
                <input
                  className="form-control" type='number' min={1} max={12} placeholder="Class"
                  value={item.class}
                />
              </td>
             
            </tr>
          ))}
        </tbody>
      </table>

    </>
  );
}

export default Table;
