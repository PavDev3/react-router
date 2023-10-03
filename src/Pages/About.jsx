import { useState } from 'react'
import { Link } from '../Link'

const i18n = {
    es: {
        title: 'Sobre mi',
        button: 'Volver',
        description: 'Hola, Me llamo Pablo y este sección es sobre mi',
        change: 'Cambiar idioma',
    }, 
    en:{
        title: 'About me',
        button: 'Back',
        description: 'Hi, My name is Pablo and this section is about me',
        change: 'Change language',
    }
}


export default function AboutPage(routeParams) {
    const [currentLang, setCurrentLang] = useState(routeParams.lang || 'es');

    const changeLanguage = () => {
        const newLang = currentLang === 'es' ? 'en' : 'es';
        setCurrentLang(newLang);
    }

    const i18nData = i18n[currentLang] || i18n.en;

    return (
        <>
            <div>
            <h1>{i18nData.title}</h1>
            <img src="https://pbs.twimg.com/profile_images/1646519923940929541/wmm-G7EG_400x400.jpg" alt='Perfil foto' />
            <p>{i18nData.description}</p>
            </div>
            <Link to='/'>{i18nData.button}</Link>
            <button onClick={changeLanguage}>{i18nData.change}</button>
        </>
    )
  }