import React from 'react';
import Button from '../../components/Button';
import Intro from '../../components/Intro';
import {Link} from 'react-router-dom';

import Header from '../../components/Header';

const Home = () => {

	return (
		<div id='Home' className='home-container'>
			<section className='section' >
				<div className='bounce-in-top'>
					<Header />
				</div>
			<div className="field">
				<Intro />
				<Link to="/quiz-page"><Button/></Link>
			</div>
			</section>
		</div>	
	);
};

export default Home;