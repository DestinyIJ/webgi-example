import React from 'react'

const DisplaySection = ({ triggerPreview }) => {
    const scrollToTop = () => {
        const element = document.querySelector('body')
        window.scrollTo({
            top: element?.getBoundingClientRect().top,
            left: 0,
            behavior: 'smooth'
        })
    }



    return (
        <div className='display-section wrapper'>
            <h2 className="title">New</h2>
            <p className="text">Brilliant</p>
            <span className="description">A display that is up to 2x brighter in the sun.</span>
            <button className='button' onClick={() => triggerPreview()}>Try Me!</button>
            <button className="back-button" onClick={() => scrollToTop()}>TOP</button>
        </div>
    )
}

export default DisplaySection
