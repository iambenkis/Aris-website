import React, { useState, useEffect } from 'react'

const Carousel = ({ items }) => {
  const [activeIndex, setActiveIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      // Auto-scroll to the next item
      setActiveIndex((prevIndex) => (prevIndex + 1) % items.length)
    }, 5000) // Adjust the time (in milliseconds) for the auto-scroll

    return () => {
      clearInterval(interval) // Clear the interval when the component unmounts
    }
  }, [items])

  return (
    <div className="carousele">
      {items.map((item, index) => (
        <div
          key={index}
          className={`carousel-item ${index === activeIndex ? 'active' : ''}`}
        >
          {item}
        </div>
      ))}
    </div>
  )
}

export default Carousel
