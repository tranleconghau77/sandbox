import { useState } from "react";
import { EXAMPLES } from "../data";
import TabButton from "./TabButton";

export default function Examples() {
    // let tabContent = 'Please click a button'
    const [selectedTopic, setSelectedTopic] = useState();

    function handleSelect(selectedButton) {
        console.log("Hello world!", selectedButton);
        setSelectedTopic(selectedButton);
    }

    return (
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
    )
}