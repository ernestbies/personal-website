import React from 'react';
import {Avatar} from '@material-ui/core';
import {info, calculateAge} from "../../utils/information";
import './About.styles.css';

const About = () => {

    return (
        <div id={'about'} className={'item-dashboard about-container row'} style={{backgroundImage: 'url(images/wallpaper1.jpg)'}}>
            <div className={'avatar-container col'} style={{flex: 2}}>
                <Avatar style={{display: 'inline-block', marginTop: 15, marginBottom: 15, width: 200, height: 200}}
                        src={'images/me.jpg'}/>
                {
                    info.achievements.map(el =>
                        <code style={{fontSize: 12}}>
                            <span style={{color: 'orange'}}>{'//'}</span> {el}
                        </code>
                    )
                }
            </div>
            <div className={'text-container col'} style={{flex: 5}}>
                <div>
                    <div className={'info-bar'}>
                        <div style={{width: 5, height: 30, marginLeft: 20, backgroundColor: 'orange'}}/>
                        <p style={{
                            paddingLeft: 7,
                            fontWeight: 300,
                            fontSize: 30,
                            margin: 0,
                        }}>{info.name + ' ' + info.surname}</p>
                    </div>
                    <div style={{display: 'flex', alignItems: 'center', marginLeft: 20, marginTop: 10}}>
                        <p style={{
                            fontWeight: 300,
                            fontSize: 15,
                            margin: 0,
                            marginRight: 7
                        }}>{calculateAge(info.dateOfBirth)}</p>
                        <div style={{width: 1, height: 14, backgroundColor: '#FFFFFF50', marginRight: 7}}/>
                        <p style={{
                            fontWeight: 300,
                            fontSize: 15,
                            margin: 0,
                            paddingRight: 7
                        }}>{info.degree}</p>
                        <div style={{width: 1, height: 14, backgroundColor: '#FFFFFF50', marginRight: 7}}/>
                        <p style={{
                            paddingRight: 7,
                            fontWeight: 300,
                            fontSize: 15,
                            margin: 0,
                        }}>{info.country}</p>
                        <div style={{width: 1, height: 14, backgroundColor: '#FFFFFF50', marginRight: 7}}/>
                        {
                            info.languages.map((el) => {
                                return (
                                    <img
                                        key={el}
                                        alt={el}
                                        width={20}
                                        height={12}
                                        style={{marginRight: 5}}
                                        src={'https://purecatamphetamine.github.io/country-flag-icons/1x1/' + el + '.svg'}
                                    />
                                )
                            })
                        }
                    </div>
                    <div className={'orange-bar'}/>
                    <p className={'info-text'}>{info.text}</p>
                </div>
            </div>
        </div>
    );
}

export default About;