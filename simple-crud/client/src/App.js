
import './App.css';
import { useState } from 'react';
import Axios from 'axios';


function App() {
  const [name, setName] = useState("");
  const [age, setAge] = useState(0);
  const [country, setCountry] = useState("");
  const [position, setPosition] = useState("");
  const [salary, setSalary] = useState(0);

  const [employeeList, setEmployeeList] = useState([]);

  const addEmployee = () =>{
    Axios.post('http://localhost:3001/create', {
      name: name, 
      age: age, 
      country: country, 
      position: position,
      salary: salary,
    }).then(() => {
        setEmployeeList([...employeeList, {
          name: name, 
          age: age, 
          country: country, 
          position: position,
          salary: salary,
        }])
      });
  };

  const getEmployees = () => {
    Axios.get('http://localhost:3001/employees').then((response) => {
        setEmployeeList(response.data)
      });
  }

  return (
    <div className="App">
      <div className="information">
      <label>Name:</label>
      <input type="text" onChange={(event) => {setName(event.target.value)}}/>

      <label>Precio:</label>
      <input type="number" onChange={(event) => {setAge(event.target.value)}}/>

      <label>Pastel:</label>
      <input type="text" onChange={(event) => {setCountry(event.target.value)}}/>

      <label>Relleno:</label>
      <input type="text" onChange={(event) => {setPosition(event.target.value)}}/>

      <label>Hora:</label>
      <input type="number" onChange={(event) => {setSalary(event.target.value)}}/>

      <button onClick={addEmployee}>Agregar orden</button>
      

      </div>
      <div className="employees">
        <button onClick={getEmployees}>Mostrar Órdenes</button>

        {employeeList.map((val, key) => {
          return <div className="employee"> 
                  <h3>Name: {val.name} </h3>
                  <h3>Precio: {val.age} </h3>
                  <h3>Pastel: {val.country} </h3>
                  <h3>Relleno: {val.position} </h3>
                  <h3>Hora: {val.salary} </h3>
                </div>
        })}
      </div>
      
      
    </div>
  );
}

export default App;