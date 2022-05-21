import React, {FC} from 'react'
import { NavLink } from 'react-router-dom'
import { Link } from 'react-router-dom'
import classes from './Navbar.module.sass'

const Navbar: FC = () => {
  return (
    <div className={classes.Navbar}>
      <header>
        <div className={classes.navbar__container}>
          <div className={classes.navbar__wrap}>
            <Link to="/" className={classes.navbar__brand}><img className={classes.logo} src="logo.svg" alt="logo"/></Link>
            <button
              // onClick={toggleTargetHandler}
              className={[classes.navbar__toggler, classes.toggler].join(' ')} type="button"
              data-toggle="show" data-target="#navbar">
              <i className={[classes.fas, classes.fa_bars].join(' ')}/>
            </button>
          </div>
          <nav
            // onClick={this.hideNav}
            className={classes.navbar__nav}
            id="navbar"
          >
            <NavLink to="/news" className={classes.nav__link}>Новости</NavLink>
            <NavLink to="/homes" className={classes.nav__link}>Дома</NavLink>
            <NavLink to="/articles" className={classes.nav__link}>Статьи</NavLink>
            <div className={classes.nav__dropdown}>
            <span className={classes.nav__dropdown__toggler} data-bs-toggle="dropdown" aria-expanded="false">
              Жителям<i className={[classes.fas, classes.fa_chevron_down].join(' ')}/>
            </span>
              <ul className={[classes.nav__dropdown__menu, classes.dropdown__menu, classes.dropdown__menu__end].join(' ')}>
                <NavLink className={classes.dropdown__link} to="/meeting">Собрания</NavLink>
                <NavLink className={classes.dropdown__link} to="/info">Раскрытие информации</NavLink>
                <NavLink className={classes.dropdown__link} to="/limit">Ограничение ЖКУ</NavLink>
              </ul>
            </div>
          </nav>
        </div>
      </header>
    </div>
  )
}

export default Navbar
