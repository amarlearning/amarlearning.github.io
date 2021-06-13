import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const projectDetails = [
    {
        image: '/projects/images/spring-boot-websocket.png',
        title: 'Chat Rooms',
        description:
            'Real time public/private chat application using spring boot web-sockets.',
        code: 'https://github.com/amarlearning/chat-rooms',
        demo: 'https://spring-ws-app.herokuapp.com/',
    },
    {
        image: '/projects/images/maxresdefault.jpg',
        title: 'Finger Detection and Tracking',
        description:
            'Tracking the movement of a finger in the real-time video frame.',
        code: 'https://github.com/amarlearning/Finger-Detection-and-Tracking',
        demo: 'https://www.youtube.com/watch?v=P3dUePye_-k',
    },
    {
        image: '/projects/images/maven-version.png',
        title: 'Maven Repository Verison',
        description:
            'Now update the repository version of all maven dependency in just a click!',
        code: 'https://github.com/amarlearning/maven-repository-version',
        demo: 'https://maven-repository-version.herokuapp.com/',
    },
    {
        image: '/projects/images/2fa.png',
        title: 'Two Factor Authentication (2FA)',
        description:
            'CLI tool to generate two-factor authentication (2FA) tokens!',
        code: 'https://github.com/amarlearning/two-factor-auth/',
        demo: 'https://github.com/amarlearning/two-factor-auth#two-factor-authentication-2fa',
    },
    {
        image: '/projects/images/sreencast.gif',
        title: 'Github Sectory',
        description:
            'CLI for downloading sub-directory of any Github repository using Github Content API!',
        code: 'https://github.com/amarlearning/Github-Sectory',
        demo: 'https://github.com/amarlearning/Github-Sectory#demo',
    },
    {
        image: '/projects/images/footstep.png',
        title: 'Footstep',
        description:
            'Footstep is a very basic event tracking application built using Django using Github API.',
        code: 'https://github.com/amarlearning/Footstep',
        demo: 'https://footstep.herokuapp.com',
    },
    {
        image: '/projects/images/smartsupport.jpg',
        title: 'Smart Support',
        description:
            'Web application which allows users to talk to customer support in over 43 languages.',
        code: 'https://github.com/Herokux/smart_support',
        demo: 'http://devpost.com/software/smart-support',
    },
    {
        image: '/projects/images/pingetron.png',
        title: 'Pingetron',
        description:
            'Pingetron is a very basic cross platform desktop application built using Electron and NodeJs.',
        code: 'https://github.com/Herokux/smart_support',
        demo: 'http://devpost.com/software/smart-support',
    },
    {
        image: '/projects/images/pystalker.png',
        title: 'PyStalker',
        description:
            'Python script to check what your friend are doing on coding sites like last visit, last contest given.',
        code: 'https://github.com/Herokux/smart_support',
        demo: 'http://devpost.com/software/smart-support',
    },
    {
        image: '/projects/images/tasklist.gif',
        title: 'TaskList',
        description:
            'TaskList is a very simple web & Android application built using Meteor, Blaze and MongoDB.',
        code: 'https://github.com/Herokux/smart_support',
        demo: 'http://devpost.com/software/smart-support',
    },
    {
        image: '/projects/images/plaked.gif',
        title: 'Plaked',
        description:
            'Classic Snake Game named Plaked | Beyond the Apple using Pygame Library of Python.',
        code: 'https://github.com/amarlearning/Plaked',
        demo: 'https://youtu.be/67en0hRGUvc',
    },
    {
        image: '/projects/images/recipejaar.png',
        title: 'RecipeJaar',
        description:
            'Recipejaar is blogging application using CakePhp. I wrote this code as a part of my freelancing project.',
        code: 'https://github.com/amarlearning/Plaked',
        demo: 'https://youtu.be/67en0hRGUvc',
    },
    {
        image: '/projects/images/dfeojm.png',
        title: 'DFEOJM',
        description:
            'A PHP Script which helps you find whether a website is Up or Down with just one function call.',
        code: 'https://github.com/amarlearning/Plaked',
        demo: 'https://youtu.be/67en0hRGUvc',
    },
    {
        image: '/projects/images/abhivyakti.jpg',
        title: 'Abhivyakti 2016',
        description:
            'Website for my colleges cultural fest named Abhivyakti. P.S. I got the Best Creative Performer award for this.',
        code: 'https://github.com/amarlearning/Abhivyakti-2016',
        demo: '#',
    },
    {
        image: '/projects/images/mis.jpg',
        title: 'Make It Short',
        description: 'PHP scripts that will help you in shortening your URL.',
        code: 'https://github.com/urls/url-shortener-php',
        demo: '#',
    },
];

var projects = projectDetails.map(function (element) {
    return (
        <div className="col" style={{ marginTop: 20 }}>
            <div className="card" style={{ width: 300, minHeight: 400 }}>
                <img
                    src={element.image}
                    className="card-img-top"
                    alt={element.title}
                    style={{ height: 200 }}
                />
                <div className="card-body">
                    <h5 className="card-title">{element.title}</h5>
                    <p className="card-text">{element.description}</p>
                    <div style={{ position: 'absolute', bottom: 20 }}>
                        <a
                            href={element.code}
                            className="btn btn-secondary"
                            target="_blank"
                        >
                            Code
                        </a>
                        <a
                            href={element.demo}
                            className="btn btn-secondary"
                            style={{ marginLeft: 20 }}
                            target="_blank"
                        >
                            Demo
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
});

function Projects() {
    return (
        <div
            className="row row-cols-auto"
            style={{ justifyContent: 'space-around' }}
        >
            {projects}
        </div>
    );
}

export default Projects;
