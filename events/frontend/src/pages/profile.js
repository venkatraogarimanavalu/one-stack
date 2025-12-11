import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const Profile = () => {
  const { userId } = useParams();
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    axios.get(`http://127.0.0.1:8000/api/profile/${userId}/`)
      .then(res => setProfile(res.data))
      .catch(err => console.error(err));
  }, [userId]);

  if (!profile) return <p>Loading...</p>;

  return (
    <div>
      <h1>Profile</h1>
      <p>Name: {profile.name}</p>
      <p>Email: {profile.email}</p>
      <p>Phone: {profile.phone}</p>
      <p>Event: {profile.event}</p>
      <p>Age Group: {profile.age_group}</p>
    </div>
  );
};

export default Profile;
