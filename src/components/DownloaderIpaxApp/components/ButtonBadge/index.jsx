import React from 'react'
import './buttonBadge.scss'

const badge = {
    android: {
        alt: 'Disponible en Google Play',
        imgSrc: require('./playstoreBadge.svg'),
        href: 'https://play.google.com/store/apps/details?id=com.iPAXStudio.iPAXAR',
    },
    ios: {
        alt: 'Disponible en App Store',
        imgSrc: require('./appstoreBadge.svg'),
        href: 'https://apps.apple.com/bo/app/ipax-ar/id1565399959',
    }
}

const ButtonBadge = ({ platform }) => {

    return (
        <a
            target="_blank"
            className="badge-link"
            href={badge[platform].href}
            style={{ margin: 10 }}
        >
            <img
                className="badge-img"
                alt={badge[platform].alt}
                src={badge[platform].imgSrc.default}
            />
        </a>
    )
}

export { ButtonBadge }
