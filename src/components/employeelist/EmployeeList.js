import React, { useState, useEffect } from 'react';
import './styles.scss';
import EmployeeCard from '../employeecard/EmployeeCard';

const EmployeeList = () => {
  const [employees, setEmployees] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [loading,setLoading]=useState(true);
  const [status,setStatus]=useState('Loading.....');

  useEffect(() => {
    fetchData()
  }, []);

  async function fetchData(){
    try {
      const response = await fetch('https://reqres.in/api/users?page=2');
      const data = await response.json();
      setEmployees(data.data);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      setStatus('Error occurred while loading');
      console.error('Error fetching data:', error);
    }
  }

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const filteredEmployees = employees.filter((employee) =>
    employee.first_name.toLowerCase().startsWith(searchTerm.toLowerCase())
  );

  return (
    <div className="employee-list">
      {loading?(
        <h1 style={{textAlign:"center"}}>{status}</h1>
      ):(
        <div>
          <input
        type="text"
        placeholder="Search by first name"
        value={searchTerm}
        onChange={handleSearch}
      />
      <ul className="employee-list__list">
        {filteredEmployees.map((employee) => (
          <li key={employee.id} className="employee-list__item">
            <EmployeeCard employee={employee} />
          </li>
        ))}
      </ul>
        </div>
      )}
    </div>
  );
};

export default EmployeeList;
