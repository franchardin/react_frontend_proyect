import "./Footer.css"
import {Link} from 'react-router-dom'

// pendiente agregar links funcionales
function Footer () {
    const links = [
        {
            text: 'Preguntas frecuentes',
            url: 'Faq'
        },
        {
            text: 'Preferencias de cookies',
            url: 'Cookies'
        },
        {
            text: 'Centro de ayuda',
            url: 'HelpCenter'
        },
        {
            text: 'Información corporativa',
            url: 'CorporationInformation'
        },
        {
            text: 'Términos de uso',
            url: 'TermsOfUse'
        },
        {
            text: 'Privacidad',
            url: 'Privacy'
        }
    ]
    const listItems = links.map(
        (element, i) => {
            return (
                <div key={i}>
                    <Link className="nav-link" to={element.url}>{element.text}</Link>
                </div>
            )
        }
    )
    return ( 
        <footer className="footer container">
            <div>
                <p>¿Preguntas? Llama al <a href="tel:+08000000000">0800-000-0000</a></p>
            </div>
            <div className="d-flex justify-content-between">
                {listItems}
            </div>
        </footer>
    );
}

export default Footer;