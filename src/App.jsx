import { Redirect, Route } from 'react-router-dom';
import { IonApp, IonRouterOutlet, setupIonicReact } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import Page from './pages/Page';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';
import { useState } from 'react';
import { getUser } from './utils/datas';

setupIonicReact();


const App = () => {

  const [login, setLogin] = useState(getUser() === null ? false:true)

  const handleSubmit = () => {

  }

  // pour path="/"
  const content = () => {
    if (login === false) return <Redirect to="/login" />
    const user = getUser()
    return user.token === "USER_DEV" ?  <Redirect to="/user-dev" /> : <Redirect to="/user-emp" /> 
  }

  return (
    <IonApp>
      <IonReactRouter>
        <IonRouterOutlet>
          <Route exact path="/login" >
            <Page />
          </Route>
          <Route exact path="/user-dev">
            <Page />
          </Route>
          <Route exact path="/user-emp" >
            <Page />
          </Route>
          {/* 
          pour la route de base avec test si connecté
          */}
          <Route
            exact
            path="/"
            render={content}
          />
        </IonRouterOutlet>
      </IonReactRouter>
    </IonApp>
  )
}
export default App;
