import { useState } from "react";
import data from "./data";
import './styles.css'

export default function Accordian() {

    const [selected, setSelected] = useState(null);
    const [enableMultiselection, setEnableMultiSelection] = useState(false);
    const [multiple, setMultiple] = useState([])

    function handleSingleSelection(getCurrentId) {
        console.log(getCurrentId);
        setSelected(getCurrentId === selected ? null : getCurrentId);
    }

    function handleMultiSelection(getCurrentId) {
        let cpyMultiple = [...multiple];
        const findIndexOfCurrentId = cpyMultiple.indexOf(getCurrentId);

        if(findIndexOfCurrentId == -1)  cpyMultiple.push(getCurrentId);
        else    cpyMultiple.splice(findIndexOfCurrentId, 1);

        setMultiple(cpyMultiple);
    }

    return <div className="wrapper">
        <button onClick={() => setEnableMultiSelection(!enableMultiselection)}>Enable Multi Selection</button>
        <div className="accordian">
            {
                data && data.length > 0 ?
                    data.map(dataItem => <div className="item">
                        <div className="title" onClick={enableMultiselection ? () => handleMultiSelection(dataItem.id) : () => handleSingleSelection(dataItem.id)}>
                            <h3>{dataItem.question}</h3>
                            <span>+</span>
                        </div>
                        {
                            selected === dataItem.id || multiple.indexOf(dataItem.id) !== -1 ?
                                <div className="content">
                                    {dataItem.answer}
                                </div>
                                : null
                        }
                    </div>)
                    : <div> No data present </div>
            }


        </div>
    </div>
}