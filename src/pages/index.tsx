import { motion } from 'framer-motion'
import React, { useEffect, useRef, useState } from 'react'
import rocket from '../styles/rocket.png'
import Image from 'next/image';
import { error } from 'console';
import WalletConnect from '@/components/WalletConnect';

function Index() {

  useEffect( () => {
    localStorage.setItem('popUpShown','false')
  },[])


  return (
    <div className=' flex items-center justify-center'>
      <WalletConnect />
    </div>
  )
}

export default Index
