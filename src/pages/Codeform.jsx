import { useState } from 'react'
import { Navbar } from '../components/Navbar'
import Codeinput from '../components/Codeinput'
import Language from '../components/Language'
import Username from '../components/Username'
import Inputbox from '../components/Inputbox'
import Submit from '../components/Submit'


export function Codeform() {

  return (
    <div className=''>
      <Navbar></Navbar>
      <div className=''>
        <div className='grid grid-cols-1 md:grid-cols-2 m-3 md:gap-10'>
          <div className='grid grid-cols-1'>
            <Username></Username>
            <Language></Language>
            <Inputbox></Inputbox>
          </div>
          <Codeinput></Codeinput>
        </div>
        <Submit></Submit>
      </div>
    </div>
  )
}
