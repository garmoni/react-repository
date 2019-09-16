import React from 'react';
import classesApp from './App.module.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import News from "./components/News/News"
import Music from "./components/Music/Music"
import classesMp from "./components/Profile/MyPosts/MyPosts.module.css";
import {BrowserRouter, Route} from "react-router-dom";


const App = () => {
  return (
  	<BrowserRouter>
		  <div className={classesApp.noWrapper}>
			<Header />
		  </div>
			<div className={`${classesApp.navContent} ${classesApp.wrapper}`}>
				<Navbar />
				<div class={classesApp.postWrapper}>
					<Route path='/profile' component={Profile} />
					<Route path='/dialogs' component={Dialogs} />
					<Route path='/news' component={News} />
					<Route path='/music' component={Music} />
				</div>
			</div>
	</BrowserRouter>
  );
}

export default App;
