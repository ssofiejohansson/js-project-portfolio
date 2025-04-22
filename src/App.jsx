import { Menu } from "./assets/sections/Menu"
import { Header } from "./assets/sections/Header"
import { Projects } from "./assets/sections/Projects"
import { Skills } from "./assets/sections/Skills"
import { Footer } from "./assets/sections/Footer"

export const App = () => {
  return (
    <>
      <Menu />
      <Header />
      <main className="mainContent">

        <Projects />
        <Skills />

      </main>
      <Footer />
    </>
  )
}
