import React from 'react';
import  "./_vedios.scss";
import { AiFillEye } from 'react-icons/ai';
import request from '../../api';
import { useEffect, useState} from 'react';
import moment from "moment";
import numeral from 'numeral';
import { LazyLoadImage } from 'react-lazy-load-image-component';

const Vedios = ( {vedio} ) => {

const {id, snippet:{channelId,channelTitle, title, publishedAt, thumbnails:{ medium }}} = vedio 

const [views,setViews] = useState(null)
const [duration,setDuration] = useState(null)
const [channelIcon,setChannelIcon] = useState(null)

const seconds = moment.duration(duration).asSeconds()
const _duration = moment.utc(seconds*1000).format("mm:ss")

const _vedioId = id?.videoId || id

useEffect(() => {
 const get_vedio_details = async () =>{
     const { data:{items} } = await request("/videos",
     {
    params:{
        part:'contentDetails,statistics',
        id:_vedioId
    }
     })
    
setViews(items[0].statistics.viewCount)
 setDuration(items[0].contentDetails.duration)
 } 
 
 get_vedio_details()  
    
}, [_vedioId])

useEffect(() => {
    const get_channel_details = async () =>{
        const {data:{items}} = await request("/channels",
        {
       params:{
           part:'snippet',
           id:channelId
       }
        })
    setChannelIcon(items[0].snippet.thumbnails.default)
    } 
    
    get_channel_details()  
       
   }, [channelId])


    return (
        <div className="vedio">
            <div className="vedio__top">
            <LazyLoadImage src = {medium.url} effect="blur"></LazyLoadImage>
            <span className="vedio__top__duration">{_duration}</span>
            </div>
            <div className="vedio__title">
            {title}
            </div>
            <div className="vedio__details">
            <span>
            <AiFillEye></AiFillEye>{ } {numeral(views).format("0.a")} views • 
            </span>    
            <span>
              {moment(publishedAt).fromNow()}
            </span>
            </div>
            <div className="vedio__channel">
            <LazyLoadImage src = {channelIcon?.url} effect="blur"></LazyLoadImage>
            <p> {channelTitle}</p> 
            </div>
        </div>
    )
}

export default Vedios
