import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Header from './components/headerComponent/header';
// import Footer from './components/footerComponent/footer';
import Banner from './components/bannerComponent/banner';
import Divider from './components/dividerComponent/divider';
import Grid from './components/gridComponent/grid';
import Gallery from './components/galleryComponent/gallery';
import Gradient from './components/bannerGradientComponent/gradient';
import Card from './components/cardComponent/card';
import './card.jpg';
import {ThemeProvider} from './themes';

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider>
    <Header />
    <Banner />
    <Divider />
    <Gallery />
    <Gradient title="Coffee Cup Lids" subheading="Plastic lids between delicate glassware!" description="When you open a new can of coffee take the lid from the old can and put it on the bottom of the new can." action={()=>{console.log('button click!')}} actionName="Click"/>
    <Card title="New coffee cup lids" subheading="New arraivals of all items" description="We are successfully meeting the varied requirements of our clients by providing the best quality" action={()=>{console.log('button click!')}} actionName="Buy Now" />
    <Gradient title="Coffee Cup Lids" subheading="Plastic lids between delicate glassware!" description="When you open a new can of coffee take the lid from the old can and put it on the bottom of the new can." action={()=>{console.log('button click!')}} actionName="Click"/>
    {/* <Footer /> */}
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
