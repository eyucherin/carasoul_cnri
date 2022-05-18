import React from 'react'

type ControlButtonsType ={
    buttonSymbol:string;
    buttonClickFunction:()=>void;
};

const ControlButtons = ({buttonSymbol,buttonClickFunction: toDo}:ControlButtonsType) => {
  return (
    <div className = "flex flex-col text-center justify-center border border-sky-500">
      <button className = "w-7 h-7 border-2 border-rose-500" onClick={()=>toDo()}>{buttonSymbol}</button>
    </div>
  );
};

export default ControlButtons