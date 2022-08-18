import React, { useState } from 'react'


const AbsenceHistoryItem = (props: any): JSX.Element => {
    const [isOpen, setIsOpen] = useState(false);
    
    const onClickHandler = () => {
        setIsOpen(!isOpen);
    }
    
    return (
        <>
            <div className="border border-slate-600 flex justify-between w-2/3 mx-56">
                <div className='relative flex items-center py-4 px-5 text-base text-gray-800 text-left bg-white border-0 rounded-none transition focus:outline-none'>
                    <strong>{props.record.absenceType} {props.record.Date}, {props.record.dayType} </strong>
                </div>
                <div className = "py-4 px-5">
                    <button>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                            <path d="M17.414 2.586a2 2 0 00-2.828 0L7 10.172V13h2.828l7.586-7.586a2 2 0 000-2.828z" />
                            <path fillRule="evenodd" d="M2 6a2 2 0 012-2h4a1 1 0 010 2H4v10h10v-4a1 1 0 112 0v4a2 2 0 01-2 2H4a2 2 0 01-2-2V6z" clipRule="evenodd" />
                        </svg>
                    </button>
                    <button>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clipRule="evenodd" />
                        </svg>
                    </button>
                    <button onClick={onClickHandler}> 
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        {isOpen ? <path fillRule="evenodd" d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z" clipRule="evenodd" /> 
                                : <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />}

                        </svg>
                    </button>
                </div>
            </div>
            {isOpen&&
                <div className='border border-slate-600 w-2/3 mx-56 items-center py-4 px-5 text-base text-gray-800 text-left bg-white rounded-none'>
                    <div className=''>
                        <p><strong>Comments: </strong> {props.record.comment}</p>
                        <p><strong>Attachment: </strong> {props.record.Attachment}</p>
                        <p><strong>No.of days requested: </strong> {props.record.numberOfDaysRequested}</p>
                    </div>
                </div>
                
            }
        </>
    )
}


export default AbsenceHistoryItem;

