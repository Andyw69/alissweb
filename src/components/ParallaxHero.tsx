export function ParallaxHero() {
  return (
    <header className="main-header">
      <div className="layers">
        <div className="layer__header">
          <div className="layers__caption">Weenoches!!</div>
          <div className="layers__title">✨🌚</div>
        </div>
        <div
          className="layer layers__base"
          style={{ backgroundImage: 'url(/img/layer-base.png)' }}
        />
        <div
          className="layer layers__middle"
          style={{ backgroundImage: 'url(/img/layer-middle.png)' }}
        />
        <div
          className="layer layers__front"
          style={{ backgroundImage: 'url(/img/layer-front.png)' }}
        />
      </div>
    </header>
  )
}
