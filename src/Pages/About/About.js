import React from 'react';

class About extends React.Component{

    render() {
        return (
            <div>
                <h2>What</h2>
                <p>We are a place to find free public domain audio books and eBooks.</p>
                <p>You can explore over 100,000 Kindle, ePUB, and audio books using our free bookshelves.</p>
                <p>Our powerful search engine not only looks hard for free digital books from great sources such as </p>

                <h2>Why</h2>
                <p>Our goal is to help as many people as possible find and enjoy digital books.</p>
                <p>We wanted to build an experience that was simple, easy-to-use and accessible no matter where you are in the world.</p>
                <p>To provide a solution that works across thousands of device and platform combinations; on mobile, tablet or desktop.</p>

                <h2>How</h2>
                <p>With only one rule: keep it simple.</p>
                <p>We ensure best practice in such areas as accessibility, technology and security..</p>
                <p>You can find an overview of our solution on the tech page.</p>

                <h2>Who</h2>
                <ul>
                    <li>
                        <dl>
                            <dt>Image</dt>
                            <dd>
                                <img src="https://placeimg.com/300/300/people" alt="test"/>
                            </dd>
                            <dt>Role</dt>
                            <dt>Founder</dt>
                            <dt>CEO</dt>
                            <dt>CTO</dt>
                        </dl>
                    </li>
                    <li>
                        <dl>
                            <dt>Image</dt>
                            <dd>
                                <img src="https://placeimg.com/300/300/people" alt="test"/>
                            </dd>
                            <dt>Role</dt>
                            <dt>Founder</dt>
                            <dt>CEO</dt>
                            <dt>CTO</dt>
                        </dl>
                    </li>
                </ul>

                <h2>The legal stuff</h2>
                <p>Digitalbook is a participant in the Amazon Services LLC Associates Program , an affiliate advertising program designed to provide a means for sites to earn advertising fees by advertising and linking to the Amazon LLC marketplaces.</p>
            </div>
        );
    }
}

export default About;