import { useState } from "react";
import { EXAMPLES } from "../data";
import TabButton from "./TabButton";
import Section from "./Section";
import Tabs from "./Tabs";

export default function Examples() {
    // let tabContent = 'Please click a button'
    const [selectedTopic, setSelectedTopic] = useState();

    function handleSelect(selectedButton) {
        console.log("Hello world!", selectedButton);
        setSelectedTopic(selectedButton);
    }

    let tabContent = <p>Please select a topic</p>;

    if (selectedTopic) {
        tabContent = (
            <div className="tab">
                <h3>{EXAMPLES[selectedTopic].title}</h3>
                <p>{EXAMPLES[selectedTopic].description}</p>
                <pre>
                    <code>{EXAMPLES[selectedTopic].code}</code>
                </pre>
            </div>
        );
    }

    return (
        <Section id="examples" title="Examples">
            <Tabs
                buttons={
                    <>
                        <TabButton
                            isSelected={selectedTopic === "components"}
                            onSelect={() => handleSelect("components")}
                        >
                            Components
                        </TabButton>
                        <TabButton
                            isSelected={selectedTopic === "jsx"}
                            onSelect={() => handleSelect("jsx")}
                        >
                            JSX
                        </TabButton>
                        <TabButton
                            isSelected={selectedTopic === "props"}
                            onSelect={() => handleSelect("props")}
                        >
                            Props
                        </TabButton>
                        <TabButton
                            isSelected={selectedTopic === "state"}
                            onSelect={() => handleSelect("state")}
                        >
                            State
                        </TabButton>
                    </>
                }
            >
                {tabContent}
            </Tabs>
            <menu></menu>
        </Section>
    );
}
