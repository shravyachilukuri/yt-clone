import React from 'react';
import { Col, Row } from 'react-bootstrap';
import "./_watchscreen.scss";
import VedioMetaData from '../../components/vedioMetaData/VedioMetaData'
import Comments from '../../components/comments/Comments';
import VedioHorizontal from '../../components/vedioHorizontal/VedioHorizontal'

const WatchScreen = () => {
    return (
        <Row>
        <Col lg={8}>
           <div className='watchScreen__player'>
              <iframe
                 src="https://www.youtube.com/embed/tgbNymZ7vqY"
                 frameBorder='0'
                 title= "MY vedio"
                 allowFullScreen
                 width='100%'
                 height='100%'></iframe>
           </div>
           <VedioMetaData></VedioMetaData>
           <Comments></Comments>
           </Col>
           <Col lg={4}></Col>
           {
              [...new Array(20)].map(video => (
             <VedioHorizontal />
            ))}
        </Row>
    )
}

export default WatchScreen
