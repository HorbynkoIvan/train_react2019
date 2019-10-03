import React, { useState } from 'react'
import SVG from 'react-inlinesvg';
import ReactSVG from 'react-svg'
import audio from '../assets/icons/audio.svg';
import audioActive from '../assets/icons/audio_active.svg';

const InlineSVGSComponent = () => {
  const [isOpen, setOpen] = useState(false)
  return (
    <>
    <h2>InlineSVGSComponent</h2>
      <h3>react-inlinesvg</h3>
      <SVG src={audio}/>
      <hr/>
      <SVG src={audioActive}/>
      <hr/>
      <h3>react-inlinesvg</h3>
      <ReactSVG src={audio}/>
      <ReactSVG src={audioActive}/>
    </>
  )
}

export default InlineSVGSComponent
