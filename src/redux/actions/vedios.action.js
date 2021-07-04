import axios from "axios"
import request from "../../api"
import { HOME_VIDEOS_SUCCESS,HOME_VIDEOS_REQUEST,HOME_VIDEOS_FAIL } from "../actionTypes"

export const getPopularVedios = () => async (dispatch,getState) =>{
 try{
  dispatch({
      type:HOME_VIDEOS_REQUEST
  })

  const { data }= await request("/videos",{

  params : {
      part :"snippet,contentDetails,statistics",
      chart:"mostPopular",
      regionCode:"IN",
      maxResults:20,
      pageToken:getState().homeVedios.nextPageToken,

}} )

dispatch({
  type:HOME_VIDEOS_SUCCESS,
  payload : {
    vedios:data.items,
    nextPageToken : data.nextPageToken,
    category:"All",
  }
}) 
 }
 catch(error){
  dispatch({
    type:HOME_VIDEOS_FAIL,
    payload : error.message

 })
}
}

export const getVediosByCategory = (keyword) => async (dispatch,getState) =>{
  try{
   dispatch({
       type:HOME_VIDEOS_REQUEST
   })
 
   const { data }= await request("/search",{
 
   params : {
       part :"snippet",
       maxResults:20,
       pageToken:getState().homeVedios.nextPageToken,
       q:keyword,
       type:"video",
 
 },} )
 
 dispatch({
   type:HOME_VIDEOS_SUCCESS,
   payload : {
     vedios:data.items,
     nextPageToken : data.nextPageToken,
     category:keyword,
   },
 }) 
  }
  catch(error){
   dispatch({
     type:HOME_VIDEOS_FAIL,
     payload : error.message,
 
  })
 }
 }