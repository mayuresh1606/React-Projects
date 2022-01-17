import {React, useState} from "react";
import { SingleComponent } from "./singleComponent";
import data from './data'
export const Components = ()=> {
    const [list, setList] = useState(data)
    const clearBirthdays = () => {
        setList([]);
    }
    return <>
        <div className='container'>
            <div className="components-container">
                {list.length === 0 && <h2 className="no-birthday">There are no birthday reminders today</h2>}
                {list.map((item, index) => {
                    return <SingleComponent key={index} {...item} />
                })}
                <button className='clear-btn' onClick={clearBirthdays}>Clear all</button>
            </div>
        </div>
    </>
}