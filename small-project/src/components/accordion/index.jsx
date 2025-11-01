import { useState } from 'react';
import data from './data';
import './style.css';

export default function Accordion() {
    const [selected, setSelected] = useState(null);
    function handleSingleSelection(getCurrentId) {
        setSelected(getCurrentId === selected ? null : getCurrentId)
    }
    return (
        <div className="wrapper">
            <div className="accordion">
                {
                    data && data.length > 0 ? (
                        data.map((dataItem, index) => (
                            <div className='item' key={index}>
                                <div className='heading' onClick={() => handleSingleSelection(dataItem.id)}>
                                    <h4>{dataItem.question}</h4>
                                    <span>+</span>
                                </div>
                                {
                                    selected === dataItem.id ? (
                                        <div className='content'>
                                            <p>{dataItem.answer}</p>
                                        </div>
                                    ) : null
                                }

                            </div>
                        ))

                    ) : (<div> Data Not Found </div>)

                }
            </div>
        </div>
    );
}