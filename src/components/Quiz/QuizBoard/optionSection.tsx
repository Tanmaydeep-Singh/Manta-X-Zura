import React from 'react'
import OptionButton from './optionButton'

function OptionSection() {
  return (
    <div className='h-[40vh] grid justify-items-center align-content-space-evenly items-center md:grid-cols-2 my-4 md:m-8'>
        <OptionButton option="A" value="1905" />
        <OptionButton option='B' value="1915"/>
        <OptionButton option='C' value="1925"/>
        <OptionButton option='D' value="1935"/>
    </div>
  )
}

export default OptionSection