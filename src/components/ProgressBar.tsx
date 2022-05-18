import React, { CSSProperties } from 'react';

type progressBarType = {
    num:number;
};


const ProgressBar = ({num}:progressBarType) => {
    const percentValue = (num/10)*100
    return (
    <div className='centerInPage'>
        <div className = "w-[60%] bg-gray-200 rounded-full h-3">
        <div className="bg-green-600 rounded-full h-3" style={{ "width": percentValue+"%"} as React.CSSProperties}></div>
        </div>
        <div className='text-[10px] pl-3'>{percentValue}</div>
    </div>
    )
}

export default ProgressBar