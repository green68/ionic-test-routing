import { IonContent, IonRouterOutlet } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { useLocation } from 'react-router';
import { Route } from 'workbox-routing';
import Board from './Board';
import './Container.css';
import Login from './Login';


const Container = ({title}) => {

  let location = useLocation();

  const content = () => {
    switch (location.pathname){
      case "/login":
        return (<Login />) 
      default:
        return <Board />
    }

  } 
  return (
    <div className="container">

      <strong>{title}</strong>
      {content()}
      
    </div>
  );
};

export default Container;
