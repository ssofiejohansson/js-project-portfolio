import { Nav } from "./assets/sections/Nav"
import { Header } from "./assets/sections/Header"
import { Projects } from "./assets/sections/Projects"
import { Skills } from "./assets/sections/Skills"
import { Footer } from "./assets/sections/Footer"
import { Blog } from "./assets/sections/Blog"

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
