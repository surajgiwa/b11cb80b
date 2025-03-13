import React, { useContext, useEffect } from 'react';
import { CallContext } from '../context/CallContext';
import TopNav from '../components/TopNav';
import BottomNav from '../components/BottomNav';
import './Home.css';

const Home = () => {
  const { calls, loading, fetchCalls } = useContext(CallContext);

  

  useEffect(() => {
    
  }, [calls, loading]);

  if (loading) return <p>Loading...</p>;
  if (!calls || calls.length === 0) return <p>No calls found.</p>;

  return (
    <div className="container">
      <TopNav />
      <div className="callLog">
        {calls.map(call => (
          <div key={call.id} className="callEntry">
            <div className="callDate">{new Date(call.created_at).toLocaleDateString()}</div>
            <div className="callDetails">
              <div className="callerInfo">{call.from || call.to}</div>
              <div className="callDescription">{call.via}</div>
            </div>
            <div className="callTime">{new Date(call.created_at).toLocaleTimeString()}</div>
          </div>
        ))}
      </div>
      <BottomNav />
    </div>
  );
};

export default Home;