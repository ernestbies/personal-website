import React from 'react';
import {Carousel} from 'react-bootstrap';
import HobbyItem from "../components/HobbyItem";

const Hobby = () => {
    const hobby = {
        esports:
            {
                name: 'Esports & gaming',
                quote: 'Practise until your idols become your rivals...',
                text: 'I have been interested in e-sport and computer games since i was a child. E-sports games are associated with emotions, competition and the desire to constantly improve your skills. These things are not foreign to me. I competed with the best players from around the world in games such as Counter Strike, H1Z1, Apex Legends and VALORANT. E-sport has taught me the desire for continuous development, teamwork, which is a key element of every e-sport game, and drawing conclusions. Learn, compete, win.',
                image: '/images/hobby/esports.jpg'
            },
        programming:
            {
                name: 'Programming',
                quote: 'The only way to learn a new programming language is by writing programs in it...',
                text: 'From an early age, I was interested in news related to the world of computers and programming. As a young boy, I ran my own servers in online games that were very popular all over the country (in games such as Minecraft and GTA). It was the first time I encountered the Java programming language. Since then, I have tried to deepen my knowledge in this field. Currently, I am interested in programming mobile and internet applications. I try to create applications with an attractive and user-friendly interface. I deepen my knowledge in the field of programming, relational and non-relational databases, operation and design of web applications, as well as application security.',
                image: '/images/hobby/programming.jpg'
            },
        cinematography:
            {
                name: 'Cinematography',
                quote: 'Watching movies is a chance to live many lifetimes...',
                text: 'I have been interested in the world of cinema since childhood. In my opinion, watching movies is a chance to get to know many cultures and customs from around the world. Watching movies allows you to develop your imagination and the desire to get to know the world. I mainly like watching action movies, dramas and thrillers. Mind-blowing psychological thrillers are my favorites. While watching, the viewer must focus on the plot, think and try to find a solution to a specific puzzle. My favorite movies of this type are Prisoners, The Game, Inception and Split. But sometimes I like to laugh, break up and watch a good comedy! :-)',
                image: '/images/hobby/cinematography.jpg'
            }
    };

    return (
        <div id={'hobby'} className={'carousel-style'}>
            <p style={{
                color: 'white',
                display: 'inline-block',
                fontFamily: 'Open Sans',
                fontWeight: 300,
                marginTop: 20
            }}>Hobby</p>
            <Carousel className={'carousel'}>
                <Carousel.Item className={'carousel-item'}>
                    <HobbyItem image={hobby.esports.image} quote={hobby.esports.quote}
                               name={hobby.esports.name} text={hobby.esports.text}/>
                    <Carousel.Caption/>
                </Carousel.Item>

                <Carousel.Item className={'carousel-item'}>
                    <HobbyItem image={hobby.programming.image} quote={hobby.programming.quote}
                               name={hobby.programming.name} text={hobby.programming.text}/>
                    <Carousel.Caption/>
                </Carousel.Item>

                <Carousel.Item className={'carousel-item'}>
                    <HobbyItem image={hobby.cinematography.image} quote={hobby.cinematography.quote}
                               name={hobby.cinematography.name} text={hobby.cinematography.text}/>
                    <Carousel.Caption/>
                </Carousel.Item>
            </Carousel>
        </div>
    );
}

export default Hobby;
