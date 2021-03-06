import React from 'react';
import "./Contact.styles.css";
import {useTranslation} from "react-i18next";
import SectionBadge from "../../components/SectionBadge/SectionBadge";
import ContactIcon from "../../components/ContactIcon/ContactIcon";
import contact from "../../utils/data/contact";
import ContactForm from "../../components/ContactForm/ContactForm";

const Contact = () => {

    const {t} = useTranslation('common');

    return (
        <div id={'contact'}>
            <div className={'contact-list'}>
                <SectionBadge
                    content={t('contact')}
                    position={'end'}
                    backgroundColor={'#8b0000'}
                    fontColor={'white'}
                    specialNumber={5}
                />
                <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                    <p className={'inform-text'}>{t('contact_text1')}
                        {'\n' + t('contact_text2')} <code className={'scale-text'} style={{color: '#DC143C'}}>e-mail</code>.</p>
                    <div style={{width: 100, height: 1, backgroundColor: 'white'}}/>
                </div>
                <div className={'contact-icons'}>
                    <ContactIcon type={'email'}/>
                    <ContactIcon type={'github'}/>
                    <ContactIcon type={'bitbucket'}/>
                    <ContactIcon type={'discord'}/>
                    <ContactIcon type={'linkedin'}/>
                </div>
                <div className={'email-container'} style={{padding: 50}}>
                    <p className={'email-header'}>{t('contact2')}</p>
                    <a href={'mailto:' + contact.email} className={'email-text'}>{'ERNESTBIES@GMAIL.COM'}</a>
                </div>
                <div className={'email-container'} style={{paddingTop: 0}}>
                    <p className={'email-header'}>{t('dm')}</p>
                    <ContactForm/>
                </div>
                <p className={'signature'}>{t('contact_info') + '\nErnest Bie??'}</p>
            </div>
        </div>
    );
}

export default Contact;
