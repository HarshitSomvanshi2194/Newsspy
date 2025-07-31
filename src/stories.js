import React from 'react'
import { useGlobalContext } from './context';


export const Stories = () => {
  const {hits, isLoading, removePost}=useGlobalContext();
  if(isLoading){
    return <h1>Loading...</h1>
  }
  return (
    <>
    <div className="stories-div" key={hits.objectID}>
    {hits.map((curPost) => {
      const {title, author,  url, num_comments, objectID}=curPost;
      return (
       <div className="card" key="objectID">
        <h2>{title}</h2>
        <p>
         By <span> {author} </span> | <span>{num_comments}</span> comments
        </p>
        <div className="card-button">
          <a href={url} target="_blank" rel="noreferrer">
            Read More
          </a>
          <button onClick={()=>removePost(objectID)} style={{ background: 'none', border: 'none', color: 'blue', textDecoration: 'underline', cursor: 'pointer' }}>
            Remove
          </button>
        </div>
       </div>
     );
      })}
      </div>
      </>
  )
  
};
export default Stories;