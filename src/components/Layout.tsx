import { useEffect, useRef } from 'react'
import { Link, NavLink, Outlet, useLocation } from 'react-router-dom'
import { sections } from '../pages/sections'

export function Layout() {
  const { pathname } = useLocation()
  const main = useRef<HTMLElement>(null)
  useEffect(() => { main.current?.focus(); window.scrollTo(0, 0) }, [pathname])
  return (
    <div className="site-shell">
      <a className="skip-link" href="#contenido">Saltar al contenido</a>
      <header className="site-header">
        <Link className="wordmark" to="/">Nicole Stern</Link>
        <p className="eyebrow">Portafolio artístico</p>
        <nav aria-label="Navegación principal">
          <ul className="nav-list">{sections.map(section => (
            <li key={section.path}><NavLink to={section.path} end>{section.title}</NavLink></li>
          ))}</ul>
        </nav>
      </header>
      <main id="contenido" ref={main} tabIndex={-1}><Outlet /></main>
      <footer className="site-footer"><span>Nicole Stern</span><span>Sitio en preparación</span></footer>
    </div>
  )
}
