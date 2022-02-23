import { IonButton } from "@ionic/react"
import { getUser, removeUser } from "../utils/datas"
import {useHistory} from "react-router-dom"
import { useState } from "react"

const Board = () => {

    const history = useHistory()

    const [user, setUser] = useState(getUser()) 

    const handleDeconnexion = () => {
        history.push("/")    
        removeUser()
    }

    return (
        <>
            <p>Tableau de bord de {user?.username}</p>
            <IonButton color="danger" onClick={handleDeconnexion}>Déconnexion</IonButton>
        </>
    )
}

export default Board
