import { Link } from "react-router-dom"
import Fragment from "../components/Fragment"
import StyledButton from "../components/Button/Button"

export default function NotFoundPage() {
    return (
        <Fragment>
            <h1>Não era pra você tá aqui não paizão</h1>

            {/* Utilizar a função Link faz com que essa tag vire uma âncora(<a>) que não recarrega á página ao clickar nela*/}
            <StyledButton content =<Link to="/">Volta pra página inicial ae</Link> />
                
        </Fragment>
    )
}