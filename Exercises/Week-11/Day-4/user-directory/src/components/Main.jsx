import React from 'react'
import Header from './Header'
import Card from './Card'
import Data from '../Data'


const Main = () => {
  return (
    <>
        <Header/>
        <Card Data={Data}/>
    </>
  )
}

export default Main