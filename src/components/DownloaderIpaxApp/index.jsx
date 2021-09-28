import React from 'react'
import { SectionTemplate } from '..'
import IpaxLogo from '../../assets/images/ipax-logo.png'
import { ButtonBadge } from './components/ButtonBadge'
import './downloaderIpaxApp.scss'

const DownloaderIpaxApp = () => {
    return (
        <SectionTemplate
            id="ipax-app-downloader"
            main={true}
            title="nuevo modelo de negocio en bolivia"
            subtitle="realidad aumentada y asesoría tecnológica para tu marca, empresa, producto o servicio"
        >
            <div className="uk-container uk-container-xsmall logo-container">
                <img className="uk-align-center" src={IpaxLogo} alt="logo iPAX" />
            </div>
            <div className="uk-container uk-container-small uk-flex uk-flex-center buttons-container">
                <ButtonBadge platform="ios" />
                <ButtonBadge platform="android" />
            </div>
        </SectionTemplate>
    )
}

export { DownloaderIpaxApp }
