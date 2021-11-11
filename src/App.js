import { useState } from "react";
import Candidate from "./components/Candidate";
import ListOfCandidates from "./components/ListOfCandidates";
import {  BrowserRouter as Router,   Route,   Routes as Switch } from "react-router-dom";

function App() {
  const [name, setName] = useState("Juan Pérez");
  const [date, setDate] = useState("01/09/2020");

  const skills = { java: true, micro: false, elastic: false };
  const [skillsReq, setSkillsReq] = useState(skills);

  return (
    <Router>
      <Switch>
        <Route path="/" element={<ListOfCandidates name={name} />} />
        <Route path="/candidate" element={<Candidate name={name} date={date} skills={skillsReq} />} />
      </Switch>
    </Router>
  );
}

export default App;
