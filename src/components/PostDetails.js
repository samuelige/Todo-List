 import React from 'react'
 import { Button } from '@material-ui/core'
 
 const PostDetails = () => {
     return (
         <div>
             <div className="col s12 m6">
                 <div className="card">
                     <div className="card-content">
                         <span className="card-title">Post One</span>
                         <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis voluptatibus mollitia vel?</p>
                     </div>
                     <div className="card-action">
                     <Button color='primary' className='btn primary'>Delete</Button>
                     </div>
                 </div>
             </div>
         </div>
     )
 }
 
 export default PostDetails
 