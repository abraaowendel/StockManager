import { Header } from "../../components/Header/index"
import { Produtos } from "../../components/Produtos"
import "./styles.css"

export const Home = () => {
    return(
        <div>
            <Header/>
            <Produtos/>
        </div>    
    )
}