import React from 'react'
import './sectionTemplate.scss'

const SectionTemplate = ({ id, main, title, subtitle, children }) => {
    return (
        <section id={id} className="uk-section">
            <div className="uk-text-center heading">
                {
                    main &&
                    <h1 className="uk-heading-medium title-section">
                        {title}
                    </h1>
                }
                {
                    !main &&
                    <h2 className="uk-heading-medium subtitle-section">
                        {title}
                    </h2>
                }
                <p className="subtitle">
                    {subtitle}
                </p>
            </div>
            {children}
        </section>
    )
}

export { SectionTemplate }
