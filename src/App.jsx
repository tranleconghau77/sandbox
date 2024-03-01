import CoreConcept from "./components/CoreConcept";
import CoreConcepts from "./components/CoreConcepts";
import Examples from "./components/Examples";
import Header from "./components/Header/Header";
import TabButton from "./components/TabButton";
import { CORE_CONCEPTS, EXAMPLES } from "./data";
import { useState } from "react";
import React from "react";

function App() {

  return (
    <>
      <Header />
      <main>
        <CoreConcepts />
        <Examples />
      </main>
    </>
  );
}

export default App;
