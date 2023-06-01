import { Estoque } from "../../components/Estoque"
import { Header } from "../../components/Header"

// eslint-disable-next-line react/prop-types
export const Home = () => {
    return(
        <div>
            <Header />
            <Estoque/>
        </div>    
    )
}