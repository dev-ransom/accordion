import React, { useState } from 'react'
const faqs = [
  {
    title: 'What is your Job description as a Frontend Developer ?',
    text:
      'Develop and maintain user-facing features for web applications.Collaborate with the design team to implement responsive and visually appealing interfaces..',
  },
  {
    title: 'What is your total experience duration?',
    text:
      'I bring one year of hands-on experience working with React and various JavaScript frameworks.',
  },
  {
    title: 'What is your current Job status?',
    text:
      'Working on myself and searching for an internship program open for frontend developers',
  },
]
const App = () => {
  return (
    <div>
      <Accordion data={faqs} />
    </div>
  )
}

export default App

function Accordion({ data }) {
  const [curOpen, setCurOpen] = useState(null)
  return (
    <div className="accordion">
      {data.map((el, i) => (
        <AccordionItem
          title={el.title}
          num={i}
          key={el.title}
          curOpen={curOpen}
          onOpen={setCurOpen}
        >
          {el.text}
        </AccordionItem>
      ))}
      <AccordionItem
        title="Test 1"
        num={22}
        key="22"
        curOpen={curOpen}
        onOpen={setCurOpen}
      >
        <p>Allows React developers to:</p>
        <ul>
          <li>Break up UI into components</li>
          <li>Make components reusuable</li>
          <li>Place state efficiently</li>
        </ul>
      </AccordionItem>
    </div>
  )
}

function AccordionItem({ num, title, curOpen, onOpen, children }) {
  const isOpen = num === curOpen
  function handleToggle() {
    onOpen(num)
  }
  return (
    <div className={`item ${isOpen ? 'open' : ''}`} onClick={handleToggle}>
      <p className="number">{num < 9 ? `0${num + 1}` : num + 1}</p>
      <p className="title">{title}</p>
      <p className="icon">{isOpen ? '-' : '+'}</p>
      {isOpen && <div className="content-box">{children}</div>}
    </div>
  )
}
