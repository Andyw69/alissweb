import { AbrazoEasterEgg } from './components/AbrazoEasterEgg'
import { ArticleSection } from './components/ArticleSection'
import { GiftModal } from './components/GiftModal'
import { ParallaxHero } from './components/ParallaxHero'
import { useScrollSmoother } from './hooks/useScrollSmoother'
import { useScrollTop } from './hooks/useScrollTop'

function App() {
  useScrollTop()
  useScrollSmoother()

  return (
    <>
      <GiftModal />
      <AbrazoEasterEgg />
      <div className="wrapper">
        <div className="content">
          <ParallaxHero />
          <ArticleSection />
        </div>
      </div>
    </>
  )
}

export default App
