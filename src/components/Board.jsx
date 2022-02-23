import { IonButton } from "@ionic/react"
import { getUser, removeUser } from "../utils/datas"
import {useHistory} from "react-router-dom"
import { useState } from "react"
import "./Board.css"

const Board = () => {

    const history = useHistory()

    const [user, setUser] = useState(getUser()) 

    const handleDeconnexion = () => {
        history.push("/")    
        removeUser()
    }

    const actions = [1,2,3,4,5]
    const listActions = actions.map( action => <IonButton key={action}>action {action}</IonButton>)
    return (
        <div className="board-container">
            <p>Tableau de bord de {user?.username}</p>
            <div className="board-actions">
                {listActions}
            </div>
            <IonButton color="danger" onClick={handleDeconnexion}>Déconnexion</IonButton>
        </div>
    )
}

export default Board
