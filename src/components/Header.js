import React from 'react'
import PropTypes from 'prop-types'

const Header = (props) => (
    <header id="header" style={props.timeout ? {display: 'none'} : {}}>
        <div className="logo">
            <span className="icon fa-diamond"></span>
        </div>
        <div className="content">
            <div className="inner">
                <h1>Ariadna Joel Tango</h1>
                <p>La idea es Afrontar el tango en su conjunto como lo que es, Cultura Identidad, actividad social de integracion, atraccion turistica, herramienta educativa.
    Se las divide en tres grupos:</p>
    <ul>    
        <li>Tango Comercial </li>
    <li>Impacto Tango </li>
    <li>Tango TRavelers </li>
</ul>
            </div>
        </div>
        <nav>
            <ul>
                <li><a href="javascript:;" onClick={() => {props.onOpenArticle('intro')}}>Tango Comercial</a></li>
                <li><a href="javascript:;" onClick={() => {props.onOpenArticle('work')}}>Impacto Tango</a></li>
                <li><a href="javascript:;" onClick={() => {props.onOpenArticle('about')}}>Tango Travelers</a></li>
                <li><a href="javascript:;" onClick={() => {props.onOpenArticle('contact')}}>Contact</a></li>
            </ul>
        </nav>
    </header>
)

Header.propTypes = {
    onOpenArticle: PropTypes.func,
    timeout: PropTypes.bool
}

export default Header
