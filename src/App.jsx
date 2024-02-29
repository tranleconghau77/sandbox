import CoreConcept from "./components/CoreConcept";
import Header from "./components/Header/Header";
import TabButton from "./components/TabButton";
import { CORE_CONCEPTS, EXAMPLES } from "./data";
import { useState } from "react";
import React from "react";

function App() {
  // let tabContent = 'Please click a button'
  const [selectedTopic, setSelectedTopic] = useState();

  function handleSelect(selectedButton) {
    console.log("Hello world!", selectedButton);
    setSelectedTopic(selectedButton);
  }

  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Core Concepts</h2>
          <ul>
            <CoreConcept {...CORE_CONCEPTS[0]} />
            <CoreConcept {...CORE_CONCEPTS[1]} />
            <CoreConcept {...CORE_CONCEPTS[2]} />
            <CoreConcept {...CORE_CONCEPTS[3]} />
          </ul>
        </section>
        <section id="examples">
          <h2>Examples</h2>
          <menu>
            <TabButton onSelect={() => handleSelect("components")}>
              Components
            </TabButton>
            <TabButton onSelect={() => handleSelect("jsx")}>JSX</TabButton>
            <TabButton onSelect={() => handleSelect("props")}>Props</TabButton>
            <TabButton onSelect={() => handleSelect("state")}>State</TabButton>
          </menu>
          {!selectedTopic && <p>Please select a topic</p>}
          {selectedTopic && <div className="tab">
            <h3>{EXAMPLES[selectedTopic].title}</h3>
            <p>{EXAMPLES[selectedTopic].description}</p>
            <pre>
              <code>{EXAMPLES[selectedTopic].code}</code>
            </pre>
          </div>}
        </section>
      </main>
    </div>
  );
}

export default App;
