import React from 'react';

const BenefitTable = ({ benefit }) => {
  return (
    <tr>
      <td>
        <b>{benefit.name}</b>
      </td>
      <td>{benefit.title}</td>
      <td>{benefit.days}</td>
      <td>{benefit.shortDescription}</td>
      <td className="text-left">{benefit.longDescription}</td>
      <td>
        <img src={benefit.image} className="w-25" alt="benefit-img" />
      </td>
      <td>{benefit.isStaff}</td>
      <td>
        <button className="btn btn-primary" disabled>
          Edit
        </button>
      </td>
      <td>
        <button className="btn btn-danger" disabled>
          Delete
        </button>
      </td>
    </tr>
  );
};

export default BenefitTable;
