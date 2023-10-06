import React from 'react';
import Button from '../../components/Button';
import Intro from '../../components/Intro';
import { useNavigate } from "react-router-dom";

import Header from '../../components/Header';
import Footer from '../../components/Footer';

const Home = () => {
	const navigate = useNavigate();
	const handlePlayNow = () => {
		navigate("/quiz-page");
	}

	return (
		<div id='Home' className='home-container'>
			<section className='section' >
				<div className='bounce-in-top'>
					<Header />
				</div>
			<div className="field">
				<Intro />
				<Button onClick={handlePlayNow} buttonLabel="Play now"/>
				<Footer	/>
			</div>
			</section>
		</div>	
	);
};

export default Home;