import { useState } from 'react';
import { Link } from '../Link';

const i18n = {
    en: {
        title: 'HomePage',
        button: 'Go to About',
        description: 'This is the HomePage',
        change: 'Change Language',
    },
    es: {
        title: 'Pagina Principal',
        button: 'Ir a About',
        description: 'Esta es la Pagina principal',
        change: 'Cambiar Idioma',
    },
}

export default function HomePage(routeParams) {
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
                <p>{i18nData.description}</p>
            </div>
            <Link to='/about'>{i18nData.button}</Link>
            <button onClick={changeLanguage}>{i18nData.change}</button>
        </>
    )
}
