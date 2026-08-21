import React from 'react'
import Section1 from './Components/Section 1/Section1'
import Section2 from './Components/Section 2/Section2'

const App = () => {
  const users = [
    {
      img: 'https://plus.unsplash.com/premium_photo-1661775907671-3b51f2dafd78?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8d29ya2luZyUyMHByb2Zlc3NvciUyMHZlcnRpY2FsJTIwbGFuZHNjYXBlfGVufDB8fDB8fHww',
      intro: 'Employees feel deeply satisfied when their workplace provides competitive compensation, clear growth pathways, and authentic recognition.',
      color: 'blue',
      tag: 'Satisfied',
    },
    {
      img: 'https://images.unsplash.com/photo-1675271470908-d6f459f9b941?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzF8fHdvcmtpbmclMjBwcm9mZXNzb3IlMjB2ZXJ0aWNhbCUyMGxhbmRzY2FwZXxlbnwwfHwwfHx8MA%3D%3D',
      intro: 'Supporting underserved workers by providing equal opportunities and fair wages builds a highly satisfied workforce.',
      color: 'blue',
      tag: 'Underserved',
    },
    {
      img: 'https://plus.unsplash.com/premium_photo-1661769142198-430b0b651fe4?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fHdvcmtpbmclMjBwcm9mZXNzb3IlMjB2ZXJ0aWNhbCUyMGxhbmRzY2FwZXxlbnwwfHwwfHx8MA%3D%3D',
      intro: 'Providing tailored digital tools satisfies underbanked employees who previously struggled to access standard workplace financial services.',
      color: 'green',
      tag: 'Underbanked',
    },

  ]
  return (
    <>
      <div>
        <Section1 users={users} />
        <Section2 />
      </div>
    </>
  )
}

export default App
