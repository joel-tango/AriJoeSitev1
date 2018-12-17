import React from 'react'
import PropTypes from 'prop-types'

import pic01 from '../images/pic01.jpg'
import pic02 from '../images/pic02.jpg'
import pic03 from '../images/pic03.jpg'

class Main extends React.Component {
  render() {

    let close = <div className="close" onClick={() => {this.props.onCloseArticle()}}></div>

    return (
      <div ref={this.props.setWrapperRef} id="main" style={this.props.timeout ? {display: 'flex'} : {display: 'none'}}>

        <article id="intro" className={`${this.props.article === 'intro' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
          <h2 className="major">Intro</h2>
          <span className="image main"><img src={pic01} alt="" /></span>
          <h3>Tango Taxi dancer:</h3>
    
    <p>objetivos: Sera el principal ingreso, cobrar por hora con un minimo de dos horas, se cobran clases privadas.</p>
    
    * Acompañar a personas con exp a una milonga, bailar con ellos, hablar.
    * La ida es ir un par de horas
    * La entrada, una copa (una consumision) incluida en la entrada
    * En la semana , se vana  programar calses grupales con el grupo en cuestion o privadas de las personas que hayan contratado.
    *Ofrecer la mini clase intoductoria  y una salida a la milonga Airbnb.
    
    
    <h3>Tango Presentacions - Shows</h3>
    
    <p>objetivo: tercera forma de ingreso, vender un mini show para eventos.</p>
    <ul>
    * Preparar canciones de salon para bailar
    * Preparar una coreografia de escenario para bailar
    * Preparar una mini representacion, con vestimenta de epoca, donde se baile tango.
    * Vender una preparacion para sorpresas de cumpleaños, casamientos etc, es decir, enseñar y entrenar a una pareja para que aprenda tango para su casamiento o algun evento.
    </ul>
          {close}
        </article>

        <article id="work" className={`${this.props.article === 'work' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
          <h2 className="major">Work</h2>
          <span className="image main"><img src={pic02} alt="" /></span>
          Impacto Tango!
    
    Tango Academia :
    
    objetivo: Educar a las personas enel tango, como un nuevo pasatiempo. 
    
    Llevar el tango la cultura a las escuelas (ver alternativas)
    
    * Armar unas clases semanales  creado un grupo que luego se haran salidas para empezar a bailar socialmente.
    * Preparar una coreo para los alumnos, a fin de año exponerlo en el Algun espacio.
    
    Proyecto social:
    
    Objetivo: Utilizar la enseñanza del tango como herramienta para el desarrollo de las personas
    fomentando valores, respeto, igualdad, disciplina, solidaridad, compromiso, conciencia, responsabiidad social, matando esteriotipos y prejuicios.
    
    * Dar calses en organizaciones sociales, agrupaciones politicas, una vez por semana.
    * Hacer presentaciones en centros de la tercera edad, hospitales.
    * Acompañar la niñez en zonas marginales con tango como acercamiento entre personas.
    
    Educacion y el Tango
    
    * Llevar el tango a las escuelas, primaria secundaria, Universidades.
    * Armar un discurso motivacional explicando de que va el tango, presentacion con imagenes, videos etc.
    * Coordinar con los docentes comprometidos socialmente para yudar en esto.
    
          {close}
        </article>

        <article id="about" className={`${this.props.article === 'about' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
          <h2 className="major">About</h2>
          <span className="image main"><img src={pic03} alt="" /></span>
          Tango Travelers 
    
    objetivo : Difundir el tango, la historia y cultura del mismo para que los viajeros lo lleven y expandan el interes del mismo.
    Hacer contactos
    
    * Armar salidas con viajeros con bajos recursos para mostrar lugares (milongas ,plazas)
    * En la salida, se les explica de que va el tango, se los lleva a lugares para ver bailar, escuchar orquesta, dar sus primeros pasos.
    * Se creara un grupo, un site, o una app, donde se actualiza el itinerario de las salidas con un cupo de gente para hacerlas (cuestion de comodidad y organizacion)
    * Si bien la idea es que sea un espacio de difucion , se a la gorra.
    
          {close}
        </article>

        <article id="contact" className={`${this.props.article === 'contact' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
          <h2 className="major">Contact</h2>
          <form method="post" action="#">
            <div className="field half first">
              <label htmlFor="name">Name</label>
              <input type="text" name="name" id="name" />
            </div>
            <div className="field half">
              <label htmlFor="email">Email</label>
              <input type="text" name="email" id="email" />
            </div>
            <div className="field">
              <label htmlFor="message">Message</label>
              <textarea name="message" id="message" rows="4"></textarea>
            </div>
            <ul className="actions">
              <li><input type="submit" value="Send Message" className="special" /></li>
              <li><input type="reset" value="Reset" /></li>
            </ul>
          </form>
          <ul className="icons">
            <li><a href="#" className="icon fa-twitter"><span className="label">Twitter</span></a></li>
            <li><a href="#" className="icon fa-facebook"><span className="label">Facebook</span></a></li>
            <li><a href="#" className="icon fa-instagram"><span className="label">Instagram</span></a></li>
            <li><a href="#" className="icon fa-github"><span className="label">GitHub</span></a></li>
          </ul>
          {close}
        </article>

      </div>
    )
  }
}

Main.propTypes = {
  route: PropTypes.object,
  article: PropTypes.string,
  articleTimeout: PropTypes.bool,
  onCloseArticle: PropTypes.func,
  timeout: PropTypes.bool,
  setWrapperRef: PropTypes.func.isRequired,
}

export default Main