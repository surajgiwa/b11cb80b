import React from 'react';
import { useParams } from 'react-router-dom';
import Header from '../components/Header';

const ActivityDetail = () => {
  const { id } = useParams();

  return (
    <div>
      <Header />
      <h1>Activity Detail</h1>
      <p>Showing details for activity ID: {id}</p>
    </div>
  );
};

export default ActivityDetail;
