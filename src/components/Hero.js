import React from 'react'

export default function Hero({ children, className }) {
  return (
    <header className={className}>
      {children}
    </header>
  )
} 

Hero.defaultProps = {
  className: 'defaultHero'
}