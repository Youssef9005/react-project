import { CORE_CONCEPTS } from "./data.js";
import { EXAMPLES } from "./data.js";
import Header from "./Components/Header/Header.jsx";
import CoreConcepts from "./Components/CoreConcepts/CoreConcepts.jsx";
import ButtonTab from "./Components/TabButtons.jsx";
import { useState } from "react";
import TabContent from "./Components/Header/TabContetn.jsx";

function App() {
  const [ selectedTopic , setSelectedTopic] = useState("");
  function handlerButton(name) {
    setSelectedTopic(name); 
  }
  return (
    <div>
      <Header/>
      <main>
        <h2>Time to get started!</h2>
        <div id="core-concepts">
          <h2>Core Concepts</h2>
          <ul>
            {CORE_CONCEPTS.map((Conceptitem) => <CoreConcepts key={selectedTopic} {...Conceptitem}/>)}
          </ul>
        </div>


        <div id="examples">
          <h2>Examples</h2>
          <menu>
            <ButtonTab isSelected={selectedTopic == "components"} onSelect={() => handlerButton("components")}>Components</ButtonTab>
            <ButtonTab isSelected={selectedTopic == "jsx"} onSelect={() => handlerButton("jsx")}>JSX</ButtonTab>
            <ButtonTab isSelected={selectedTopic == "props"} onSelect={() => handlerButton("props")}>Props</ButtonTab>
            <ButtonTab isSelected={selectedTopic == "state"} onSelect={() => handlerButton("state")}>State</ButtonTab>
          </menu>

          {!selectedTopic ? <p>Select Any Topic You Want</p> : <div id="tab-content">
              <h3>{EXAMPLES[selectedTopic].title}</h3>
              <p>{EXAMPLES[selectedTopic].description}</p>
              <pre>
                <code>{EXAMPLES[selectedTopic].code}</code>
              </pre>
          </div>}

        </div>
      </main>
    </div>
  );
}

export default App;