import { gsap } from "gsap/gsap-core";
import { Draggable } from "gsap/all";

import { Navbar, Welcome, Dock } from "#components";
import { Terminal, Safari, Resume, Finder } from "#windows";

gsap.registerPlugin(Draggable);

const App = ()=> {
  return (
    <main>
      <Navbar/>
      <Welcome/>
      <Dock/>

      <Terminal/>
      <Safari/>
      <Resume/>
      <Finder/>
    </main>
  )
}

export default App;