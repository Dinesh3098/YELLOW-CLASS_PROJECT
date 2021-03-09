import React ,{useState,useEffect} from 'react';
import {Loader} from './components/Loader';
import {UnsplashImage} from './components/UnsplashImage';
import {Header} from './components/Header';

import axios from 'axios';
import styled from 'styled-components';
import {createGlobalStyle} from 'styled-components';
import InfiniteScroll from 'react-infinite-scroll-component';
import Masonry from 'react-masonry-css';
import "./index.css";
import {SRLWrapper} from 'simple-react-lightbox'

//styles
const GlobleStyle = createGlobalStyle`
  *{
    margin:0;
    padding:0;
    box-sizing:border-box;
    background-color:black;
  }
  body
  {
    font-family:cursive;
  }
`;

function App() {
  const [images,setImages] = useState([]);

  useEffect(() => {
    fetchImages();
  },[])

const fetchImages = () => {
  const api = "https://api.unsplash.com";
  // const accessKey = process.env.REACT_APP_ACCESSKEY;

  axios
    .get(`${api}/photos/random?client_id=LSlsO4zFZo8vrLmnXuoDrcwwxc8gAqcEWihIfbFQ2bI&count=10`)
    .then(res => setImages([...images,...res.data]))
    .catch((err) => console.log(err));
};

const breakpointsColumnsObj ={
  default:6,
  1200:3,
  992:3,
  768:2,
  576:1,
};
const option ={
  buttons:{
    iconColor: 'orange'
  }

};


return (
    <div >
      <Header />
      <GlobleStyle/>
      <SRLWrapper options={option}>
      <div className="container-fluid">
        <div className="row">
            <div className="col-md-12">
            <InfiniteScroll
              dataLength = {images.length}
              next = {fetchImages}
              hasMore ={true}
              loader = {<Loader />}
            >
              <Masonry breakpointsCols={breakpointsColumnsObj} className="masonry-grid" 
              columnClassName="masonry-grid_column">
                {images.map(image => (
                    <a href={image.urls.regular}>
                      <UnsplashImage url={image.urls.regular} key={image.id} />
                    </a>
                  ))}
              </Masonry>
            </InfiniteScroll>
            </div>
        </div>
      </div>
      </SRLWrapper>
      
    </div>
  );
}

export default App;
