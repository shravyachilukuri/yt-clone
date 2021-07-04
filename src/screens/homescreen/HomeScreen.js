import React from 'react'
import Categories from '../../components/categories/Categories';
import { Container,Row,Col } from 'react-bootstrap';
import Vedios from '../../components/vedios/Vedios';
import { useEffect } from "react"
import { useDispatch,useSelector } from 'react-redux';
import { getPopularVedios, getVediosByCategory } from '../../redux/actions/vedios.action';
import InfiniteScroll from 'react-infinite-scroll-component';
import Skeleton from "react-loading-skeleton";
import Skeletonvedios from '../../components/skeletons/Skeletonvedios';


export const HomeScreen = () => {

const dispatch = useDispatch()

   useEffect(()=>{
    
     dispatch(getPopularVedios())
     
   },[dispatch])
   
   const { vedios,activeCategory, loading} = useSelector(state => state.homeVedios)
 
 const fetchData = () =>{
   if(activeCategory === "All"){
    
  dispatch(getPopularVedios())
  
   }  
  else{
    
  dispatch(getVediosByCategory(activeCategory))
  
  }
 }

    return (
    <Container>
            <Categories></Categories>
            <InfiniteScroll
              dataLength = {vedios.length}
              next={fetchData}
              hasMore={true}
              Loader={
                <div className="spinner-border text-danger d-block mx-auto">
                </div>
              } 
              className = "row">           
                   {!loading ? vedios.map(vedio => (
                          <Col key={vedio.id} sm={3} >
                           <Vedios vedio = {vedio}></Vedios>
                          </Col>  
                        )
                    )
               : [...Array(20)].map( () =>
               <Col sm={3} >
                 <Skeletonvedios></Skeletonvedios>
               
               </Col>)
                   }
              </InfiniteScroll> 
    </Container>
    )
}
