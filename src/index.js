import React, { useState } from 'react';
import client from 'react-dom/client';

import './build.css';

import HeaderIconImg from './images/HeaderIcon.png';
import FrameworkImg from './images/Framework.jpg';
import ResearchImg from './images/Research.jpg';
import ActionImg from './images/Action.jpg';

import Header from './components/Header.js';
import Body from './components/Body.js';
import Footer from './components/Footer.js';
import NavLink from './components/NavLink.js';
import Card from './components/Card.js';
import PageContainer from './components/PageContainer';

function App() {

  const [page, setPage] = useState('');

  const disableOnPageSwitch = (page == '') ? "0" : "-1";

  return (
    <>
      <Header
        image={HeaderIconImg}
        title='Multimodal Narrative: Disability Inclusion'
        tabIndex={disableOnPageSwitch}
        links={[
          <NavLink
            key='0'
            text='Annotated Bibliography'
            tabIndex={disableOnPageSwitch}
            href='//docs.google.com/document/d/1MC2VobxaLlIYjQ3QYqFYaiFJLNwp-sns-JuJ7D27sdA/edit?usp=sharing'
          />
        ]}
      />

      <Body>
        <br />
        <h2 className='text-5xl mx-56 text-center portrait:mx-8 leading-tight'>
          &ldquo;How can we help create a society that allows disabled people not only
          to <b>participate</b> but to <b>flourish</b>?&rdquo;
        </h2>
        <br />
        <br />
        <p className='text-xl mx-4'>
          As I was diving into sources on the topic of disability, this is the
          question I began to ask myself. What is modern society getting right?
          What are we getting wrong? How should we improve? What does that look
          like practically?
        </p>
        <br />
        <p className='text-xl mx-4'>
          Over the past few weeks, I have been building a research archive of
          several sources that provide some amazing insight into these questions.
        </p>
        <br />
        <p className='text-xl mx-4'>
          You can find more information below:
        </p>
        <br />
        <div className='text-center'>
          <Card
            title='Theoretical Framework'
            image={FrameworkImg}
            tabIndex={disableOnPageSwitch}
            onClick={() => { setPage('Theoretical Framework') }}
          />
          <Card
            title='Research Process'
            image={ResearchImg}
            tabIndex={disableOnPageSwitch}
            onClick={() => { setPage('Research Process') }}
          />
          <Card
            title='Action Plan'
            image={ActionImg}
            tabIndex={disableOnPageSwitch}
            onClick={() => { setPage('Action Plan') }}
          />
        </div>
      </Body>

      <PageContainer 
        page={page}
        setPage={setPage}
      />
      
      <Footer
        year={new Date().getFullYear()}
        holder='Benjamin Pryor'
        tabIndex={disableOnPageSwitch}
        links={[
          <NavLink
            key='0'
            text='My Projects'
            tabIndex={disableOnPageSwitch}
            href='//programmer2514.github.io/'
          />
        ]}
      >
        <p>Made with</p>
        <NavLink
          className='-translate-x-3 underline'
          key='1'
          text='ReactJS'
          tabIndex={disableOnPageSwitch}
          href='//react.dev/'
        />
        <p className='-translate-x-2'>and</p>
        <NavLink
          className='-translate-x-5 underline'
          key='1'
          text='TailwindCSS'
          tabIndex={disableOnPageSwitch}
          href='//tailwindcss.com/'
        />
      </Footer>
    </>
  )
}

client
  .createRoot( document.getElementById('root') )
  .render( <App /> );