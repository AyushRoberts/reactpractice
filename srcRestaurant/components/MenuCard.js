import React from 'react'
// import "./basics/style.css"
// import Menu from './basics/menuApi'

const MenuCard = ({menuD}) => {
  const mystyle={color:'red'}
// console.log(menuDat)
  return <><section className='main-card--cointainer'>
  {menuD.map((e) => {
    const {id,name,category,image,description}=e;
return <><div className='card-container' key={id}>
<div className='card'>
  <div className='card-body'>
    <span className='card-number card-circle subtle'>{e.id}</span>
    <span className="card-author subtle" style={mystyle}>{e.category}</span>
    <h2 className="card-title">{name}</h2>
    <span className="card-description subtle">{description}</span>
    <div className="card-read">More</div>
  </div>
  <img src={e.image}  alt=""></img>
  <span className="card-tag subtle">click here</span>
</div>
</div></>
  })}
  </section>
</>
}

export default MenuCard