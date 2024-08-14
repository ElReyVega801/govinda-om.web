import React from 'react';
import EssentialOils from './EssentialOils';
import Certifications from './Certifications';
import Therapies from './Therapies';
import Workshops from './Workshops';
import './store.css';

function Index() {
  return (
    <div className="store">
      <h1>Store</h1>
      <EssentialOils />
      <Certifications />
      <Therapies />
      <Workshops />
    </div>
  );
}

export default Index;