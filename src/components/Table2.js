import React from 'react';
import Edit2 from '../components/Edit2';
import Add2 from '../components/Add2';
import Delete2 from '../components/Delete2';


function Table(props) {

  const table = props.table
  return (
    <>
         <div className='d-flex justify-content-start'>
             <Edit2/>
             <Add2/>
             <Delete2/>
             </div>
      <label className="Display-4"><h2>Student Table</h2></label>
      <table className="table table-hover table-bordered">
        <thead className="thead">
          <tr>
            <th>S/N</th>
            <th>Name</th>
            <th>salary</th>
            <th>Class</th>
            <th>Age</th>
          </tr>
        </thead>
        <tbody className='tbody'>
          {table.map((item, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>
                <input
                  className="form-control" type='text' required placeholder="Name"
                  value={item.name}
                />
              </td>
              <td>
                <input className="form-control" type='number' min={1} max={100} required placeholder="Roll Number"
                  value={item.salary}
                />
              </td>
              <td>
                <input
                  className="form-control" type='number' min={1} max={12} placeholder="Class"
                  value={item.class}
                />
              </td>
              <td>
                <input
                  className="form-control" type='number' min={1} max={21} required placeholder="age"
                  value={item.age} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>

    </>
  );
}

export default Table;
