import "./Footer.css"

// pendiente agregar links funcionales
function Footer () {
    const links = [
        {
            text: 'Preguntas frecuentes',
            url: '#'
        },
        {
            text: 'Preferencias de cookies',
            url: '#'
        },
        {
            text: 'Centro de ayuda',
            url: '#'
        },
        {
            text: 'Información corporativa',
            url: '#'
        },
        {
            text: 'Términos de uso',
            url: '#'
        },
        {
            text: 'Privacidad',
            url: '#'
        }
    ]
    const listItems = links.map(
        (element, i) => {
            return (
                <div key={i}>
                    <a href={element.url}>{element.text}</a>
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