import React, { useState, useEffect } from 'react'

export const ScrollHooks = () => {
  const [scrollY, setScrollY] = useState<number>()
  useEffect(() => {
    console.log('Component did mount');
    const detectScroll = () => setScrollY(window.pageYOffset)
    window.addEventListener("scroll", detectScroll)
  }, [])
  
  useEffect(() => {
    console.log(scrollY);
    
  },[scrollY])
  return (
    <>
			<h2>useState and life cicle</h2>

    </>
  )
}
