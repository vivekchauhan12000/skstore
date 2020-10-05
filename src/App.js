import React ,{useState} from 'react'
import '../src/App.css';

export default function App() {
  const [cart,setCart]=([]);
  const [product]= useState([
  {
  name:'Ak-47 The Empress',
  cost:'30$',
  image:'https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_ak47_gs_ak47_empress_light_large.f81d0b07dca381635c89f74bcdb6b64a6da6e81c.png',
  float:'0.7',
  stickers:'none',
  },
  {
    name:'AWP Hyper Beast',
    cost:'42$',
    image:'https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_awp_cu_awp_hyper_beast_light_large.55efa5e3094af71ca6a56b6eac96cb022f7ecd8b.png',
    float:'0.6',
    stickers:'Dlore',
  }
  ]);

  const addToCart=(product)=>{
    console.log("added to cart");
    setCart([...cart,product]);
  }

  return (
    <div className="App">
      <h1>
        Csgo Skins
      </h1>
      {product.map((product,idx)=>(
       
       <div className="card" key={idx}>
        <h3>{product.name}</h3>
        <img id="img" src={product.image} alt={product.name}/>
        <h4>Price: {product.cost}</h4>
        <h4>Float: {product.float}</h4>
        <h4>Stickers: {product.stickers}</h4>
       
        <button onClick={()=>addToCart(product)}>add to cart</button>
      </div>

      ))}
     
      
    </div>
  )
}
