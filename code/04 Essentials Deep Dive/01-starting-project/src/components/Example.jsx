import { EXAMPLES } from "../data.js";
import Section from "./Section.jsx";
import Tabs from "./Tabs.jsx";

export default function Examples() {
  const id = 'examples'
  return (
    <Section id={id}>
      <h2>Examples</h2>
      <Tabs tabsData={EXAMPLES} ButtonContainer="menu" id={id} />
    </Section>
  );
}
