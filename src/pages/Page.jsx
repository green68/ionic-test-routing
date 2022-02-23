import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/react';
import { useLocation } from 'react-router';
import Container from '../components/Container';
import './Page.css';

const Page = () => {

  let location = useLocation();
  console.log("Dans page -> location",location);
  let title = location.pathname.substring(1)

  return (
    <>
      <IonHeader>
        <IonToolbar>
          <IonTitle className='capitalize'>{title}</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <Container title={title} />
      </IonContent>
    </>
  );
};

export default Page;
