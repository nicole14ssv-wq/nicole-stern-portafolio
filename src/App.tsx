import { Link, Route, Routes } from 'react-router-dom'
import { Layout } from './components/Layout'
import { SectionPage } from './pages/SectionPage'
import { sections } from './pages/sections'

export function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        {sections.map((section, index) => (
          <Route key={section.path} path={section.path}
            element={<SectionPage title={section.title} number={index + 1} />} />
        ))}
        <Route path="*" element={<article className="section-page"><h1>Página no encontrada</h1><Link to="/">Volver al inicio</Link></article>} />
      </Route>
    </Routes>
  )
}
