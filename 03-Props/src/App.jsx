import React from 'react'
import Card from './Components/Card'

const App = () => {
  return (
    <>
      <div className='parent'>
        <Card user='Rahul Singh'
          img='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlh0xz2IFyqw2rS-vba9NyWd1sBovXfN-pwo7gmZtpQA&s=10'
          desc='Rahul Singh is a dynamic professional whose dedicated expertise and impactful contributions continue to drive significant advancement within his field.' />
        <Card user='Rehan Singh'
          img='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRv1a3iA8eqCsB_s3Yh8XJDVgN4H1KCwnuaqegb-YG-ynm2uEXXS2smE68B&s=10'
          desc='Rehan Singh is an ambitious individual whose relentless drive, unique talents, and distinct personal achievements allow him to excel and leave a lasting impression in his chosen endeavors.' />
        <Card user='Rohan Singh'
          img='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTTq3MPKMKn8Gw-uCvZtwqWZu9xptQ8Je5Rf-DQb2OdA&s=10'
          desc='Rohan Singh is a highly versatile and determined individual whose distinct combination of focus, creativity, and professional dedication allows him to consistently make an impact in life.' />
      </div>
    </>
  )
}

export default App
