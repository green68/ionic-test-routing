import { IonButton, IonInput, IonItem } from "@ionic/react"
import { useState } from "react"
import {useHistory} from "react-router-dom"
import { setUser } from "../utils/datas"

const Login = () => {

    let history = useHistory()

    const handleSubmit = e => {
        e.preventDefault()
        if (email === "eric" &&  password==="eric") {
            setUser(email,password,"USER_DEV")
            history.push("/user-dev") 
        }
        if (email === "david" &&  password==="david") {
            setUser(email,password,"USER_EMP")
            history.push("/user-emp") 
        }

    }

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    return (
        <>
            <IonItem>
                <IonInput value={email} placeholder="Email" type="email" onIonChange={e => setEmail(e.detail.value)}></IonInput>
            </IonItem>
            <IonItem>
                <IonInput value={password} placeholder="Password" type="password" onIonChange={e => setPassword(e.detail.value)}></IonInput>
            </IonItem>
            <IonItem>
                <IonButton type="password" onClick={handleSubmit}>Envoyer</IonButton>
            </IonItem>

        </>
    )
}

export default Login