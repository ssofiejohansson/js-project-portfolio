import { Nav } from "./sections/Nav"
import { Header } from "./sections/Header"
import { Projects } from "./sections/Projects"
import { Skills } from "./sections/Skills"
import { Footer } from "./sections/Footer"
import { Blog } from "./sections/Blog"

export const App = () => {
  return (
    <>
      <Nav />
      <Header />
      <main>

        <Projects />
        <Skills />
        <Blog />

      </main>
      <Footer />
    </>
  )
}
