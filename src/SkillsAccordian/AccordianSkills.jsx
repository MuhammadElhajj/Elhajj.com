import { useState } from "react";
import "./AccordianSkills.css";
import AccordianSkillsInfo from "./AccordianSkillsInfo";
import { FaAnglesDown } from "react-icons/fa6";
import { FaAnglesUp } from "react-icons/fa6";

function AccordianSkills() {
  const [selected, setSelected] = useState(null);
  const [enableMultiSelection, setEnableMultiSelection] = useState(true);
  const [multiple, setMultiple] = useState([]);
  function handleSingleSelection(getCurrentId) {
    setSelected(getCurrentId === selected ? null : getCurrentId);
    console.log(getCurrentId);
  }
  function handleMultiSelection(getCurrentId) {
    let cpyMulti = [...multiple];
    const findIndexOfCurrentId = cpyMulti.indexOf(getCurrentId);

    if (findIndexOfCurrentId === -1) {
      cpyMulti.push(getCurrentId);
    } else {
      cpyMulti.splice(findIndexOfCurrentId, 1);
    }
    setMultiple(cpyMulti);
  }
  return (
    <div
     className="AccordianSkills">
      <h2 div 
      className="AccordianSkills__h2">
        Skills
        <span div className="AccordianSkills__h2__span">
          Of
        </span>
        me
      </h2>
      {/* <button className='Multiable__Selection__Button' onClick={() => setEnableMultiSelection(!enableMultiSelection)}>{enableMultiSelection ? "Disable Multiable Selection" :"Enable Multiable Selection"}</button> */}
      <div className="accordian">
        {AccordianSkillsInfo && AccordianSkillsInfo.length > 0 ? (
          AccordianSkillsInfo.map((item) => (
            <div className="accordian__Item">
              <div
                onClick={
                  enableMultiSelection
                    ? () => handleMultiSelection(item.id)
                    : () => handleSingleSelection(item.id)
                }
                className="Accordian__Title"
              >
                <h3 className="Accordian__Title__h3">{item.question}</h3>
                {selected === item.id || multiple.indexOf(item.id) !== -1 ? (
                  <FaAnglesUp className="Accordian__Title__Icon" />
                ) : (
                  <FaAnglesDown className="Accordian__Title__Icon" />
                )}
              </div>
              {selected === item.id || multiple.indexOf(item.id) !== -1 ? (
                <div className="Accordian__Content">{item.answer}</div>
              ) : null}
            </div>
          ))
        ) : (
          <div>No thing to show</div>
        )}
      </div>
    </div>
  );
}

export default AccordianSkills;
