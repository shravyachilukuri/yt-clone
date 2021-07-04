import React from 'react';
import Skeleton,{SkeletonTheme} from "react-loading-skeleton";

const Skeletonvedios = () => {
    return (
        <div style={{width:"100%", margin:"1rem 0"}}>
            <SkeletonTheme color="#343a40" highlightColor="#3c3147">
            <Skeleton height = {180}></Skeleton>
               <div>
               <Skeleton style={{ margin:'0.5rem'}} circle height={40} width={40}></Skeleton>
               <Skeleton height={40} width="75%" ></Skeleton>
               </div> 
           
            </SkeletonTheme>
            
        </div>
    )
}

export default Skeletonvedios
