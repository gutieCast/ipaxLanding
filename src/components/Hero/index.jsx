import React from 'react'

const Hero = ({ children }) => {
    return (
        <section id="hero" className="uk-container uk-container-large">
            {children}
        </section>
    )
}

export { Hero }
