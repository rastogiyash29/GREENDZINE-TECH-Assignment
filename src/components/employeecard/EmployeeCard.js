import React from 'react';
import './styles.scss';

const EmployeeCard = ({ employee }) => {
  return (
    <div className="employee-card">
      <div className="employee-card__id">{employee.id}</div>
      <div className="employee-card__avatar-container">
        <img src={employee.avatar} alt="Avatar" className="employee-card__avatar" />
      </div>
      <div className="employee-card__name">{employee.first_name} {employee.last_name}</div>
      <div className="employee-card__email">{employee.email}</div>
    </div>
  );
};

export default EmployeeCard;
