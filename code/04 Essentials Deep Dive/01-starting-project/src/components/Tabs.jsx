import { useState } from "react";
import TabButton from "./TabButton";

export default function Tabs({ tabsData, ButtonContainer, ...props }) {
  const [selectedTopic, setSelectedTopic] = useState();
  let tabsMap = new Map(Object.entries(tabsData));

  function handleSelect(selectedButton) {
    setSelectedTopic(selectedButton);
  }

  let tabContent = <p>Please select a topic.</p>;

  if (selectedTopic) {
    tabContent = (
      <div id="tab-content">
        <h3>{tabsData[selectedTopic].title}</h3>
        <p>{tabsData[selectedTopic].description}</p>
        <pre>
          <code>{tabsData[selectedTopic].code}</code>
        </pre>
      </div>
    );
  }

  let buttons = Array.from(tabsMap.keys()).map((key) => (
    <TabButton
      key={key}
      isSelected={selectedTopic === key}
      onSelect={() => handleSelect(key)}
      {...props}
    >
      {tabsData[key].title}
    </TabButton>
  ));

  return (
    <>
      <ButtonContainer>{buttons}</ButtonContainer>
      {tabContent}
    </>
  );
}
