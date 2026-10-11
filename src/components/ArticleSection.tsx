import type { CSSProperties, FC } from 'react'

const LordIcon = 'lord-icon' as unknown as FC<{
  src: string
  trigger: string
  style?: CSSProperties
}>

export function ArticleSection() {
  return (
    <article
      className="main-article"
      style={{ backgroundImage: 'url(/img/dungeon.jpg)' }}
    >
      <div className="main-article__content">
        <h2 className="main-article__header" style={{ alignItems: 'center', minHeight: '20vh' }}>
          This is for you
        </h2>
        <p className="main-article__paragraph">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illum, provident.
        </p>
        <p className="main-article__paragraph">Para seguir presiona al girasol!</p>
        <a href="#" className="girasol">
          <LordIcon
            src="https://cdn.lordicon.com/rzdoyang.json"
            trigger="hover"
            style={{
              width: '150px',
              height: '150px',
              position: 'sticky',
              justifyContent: 'center',
            }}
          />
        </a>
      </div>
      <br />
      <div className="copy">Lorem ipsum dolor sit amet.</div>
    </article>
  )
}
