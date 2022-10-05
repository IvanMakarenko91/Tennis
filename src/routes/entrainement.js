import React, { useState } from "react";
import './entrainement.css';
import Select from 'react-select';

const Entrainement = () => {
    var colors = [{
      value:1,
      label:"black"
    },
    {
      value:2,
      label:"red"
    },
    {
      value:3,
      label:"blue"
    },
    {
      value:4,
      label:"yellow"
    }
  ];

  var [color, setColor] = useState(colors.label);
  var ddhandle = e => {
    setColor(e.label)
  }

  var [colore, setColore] = useState(colors.label);
  var ddhandlee = e => {
    setColore(e.label)
  }
  
  return (
    <>
      <div className="grille">
        {/* <style>{'.grid1 {background-color:'+color+'}'}</style> */}
        <div style={{backgroundColor: color, zIndex: 2}} className="grid-item grid1"><Select options={colors} className="select" onChange={ddhandle}></Select></div>
        <div style={{backgroundColor: colore, zIndex: 2}} className="grid-item grid2"><Select options={colors} className="select" onChange={ddhandlee}></Select></div>
        <div className="grid-item grid3"></div>
        <div className="grid-item grid4"></div>

        <div className="grid-item grid5"></div>
        <div className="grid-item grid6"></div>
        <div className="grid-item grid7"></div>
        <div className="grid-item grid8"></div>

        <div className="grid-item grid9"></div>
        <div className="grid-item grid10"></div>
        <div className="grid-item grid11"></div>
        <div className="grid-item grid12"></div>

        <div className="grid-item grid13"></div>
        <div className="grid-item grid14"></div>
        <div className="grid-item grid15"></div>
        <div className="grid-item grid16"></div>
      </div>
    </>
  )
}

export default Entrainement