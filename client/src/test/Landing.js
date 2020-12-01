import React, { useState } from 'react';
import { useQuery } from '@apollo/react-hooks';
import { getApartments } from './queries/query';
import List from './List';
import Filter from './Filter';
import Navbar from './Navbar';
import {Ddemo} from './Ddemo';

export default function Landing() {

  const [ showLanding, setShowLanding ] = useState(true);
  const [ showMap, setShowMap ] = useState(false);
  
  const { loading, error, data } = useQuery(getApartments);

  const clickHandler = () => {
    setShowLanding(!showLanding);
  };
  const onShowMap = () => {
    setShowMap(!showMap);
  };

  const landingPage = () => {
    if (showLanding && data) {
      if (showMap) {
        return <Ddemo array={data.apartments} loading={loading} error={error} />
      }
      return <List array={data.apartments} loading={loading} error={error} />
    } else {
      return <Filter showLanding={showLanding} showMap={showMap} />
    }
  }

  return (
    <div>
      <Navbar clickHandler={clickHandler} onShowMap={onShowMap} showMap={showMap} />
      { landingPage() } 
    </div>
  )
}
