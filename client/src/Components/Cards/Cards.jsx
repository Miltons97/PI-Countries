import React from 'react';
import Card from '../Card/Card';
import styles from './Cards.module.css';

import { useEffect} from 'react';
import { useDispatch } from 'react-redux';

import { getAllCountries } from '../../redux/actions';

const CardsCountries = ({ countries, onClose }) => { 

  const dispatch = useDispatch();

  

  useEffect(() => {
    if (!countries.length) {
        //dispatch(getAllCountries())
    }
  }, [dispatch, countries.length]);

  return (
    <div className={styles.CardsCountries}>
      { countries.map((e) => (
        <Card
          key={e.id} 
          flag={e.flag}
          name={e.name}
          continent={e.continent}
          subRegion={e.subRegion}
          id = {e.id} 
          onClose= {() => onClose(e.id)}
        /> 
        
      ))}
    </div>
  );
};

export default CardsCountries;