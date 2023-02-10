import React from 'react'

function List({people}) {
  return (
    <>
      {
      people.map((person)=>{
        const {id,image,name,age} =person
        return(
            <article key={id} className="person">
            <img src={image}/>
             <div>
                <h4>{name}</h4>
                <p>{age} years old</p>
             </div>
           </article>
        )
       })}
    </>
  )
}

export default List
