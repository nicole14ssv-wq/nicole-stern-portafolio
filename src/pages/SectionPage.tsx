import { useEffect } from 'react'

interface SectionPageProps { title: string; number: number }

export function SectionPage({ title, number }: SectionPageProps) {
  useEffect(() => { document.title = `${title} · Nicole Stern` }, [title])
  return (
    <article className="section-page">
      <p className="eyebrow">Sección {String(number).padStart(2, '0')} / 07</p>
      <h1>{title}</h1>
      <p className="intro">Espacio preparado para el portafolio artístico de Nicole Stern.</p>
      <p className="status-note">Contenido editorial pendiente. Esta página es una base técnica provisional.</p>
    </article>
  )
}
