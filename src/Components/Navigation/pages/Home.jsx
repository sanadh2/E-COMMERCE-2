import React,{useState,useEffect} from "react";
import './styles/home.css'
import products from "../../../assets/CategoryData";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Home = () => {

  const [data,setData] =useState([]);
  const [search,setSearch]= useState("");
  const [cart,setCart]=useState([])
  useEffect(()=>{
    fetch("https://fakestoreapi.com/products")
    .then((res) => res.json())
    .then((json) => {
      setData(json);
      //console.log(json);
      
    });
  },[]);


const addCart=(card)=>{
  if(!card.qty)
  card.qty=0;
  let prevCart=[...cart];
  let k= prevCart.includes(card);  
  if(k) 
  {
    let index = prevCart.indexOf(card)
    prevCart[index].qty++;
    
  }else{
    prevCart.push(card);
    setCart(prevCart);
  } 

}
console.log(cart);

  let  Catogeries =(data!="") ?data.map(el=>el.category):[];
  Catogeries=Catogeries.filter((item,index) => Catogeries.indexOf(item) === index);
  
  const loader = ()=>{
    return (
    <>
    <div className="holder"> <div className="spinner"></div></div>
    </>
    )
  }

  
  const loaded = ()=>{

    return(
      <>
       <nav className="categories">
    <button onClick={()=>{
      setSearch("")
    }} className="category">All</button>
      {Catogeries.map(el=>(
        <button key={el} onClick={()=>setSearch(el)} className="category">{el}</button>
      ))}
      <button className="category" >Cart</button>
    </nav>
     
      
    <div className="holder">
      {search==""?
      data.map((el,i)=>(
          <div key={i} className="card" onClick={()=>addCart(el)} >
            <div className="image" key={el.image}>
              <img className="item-img" src={el.image} />
            </div>
            <span className="titleName">{el.title}</span>
            <span className="price"><font color="green">$</font>{el.price}</span>
          </div>
        )) 
        :
      data.filter(el=>el.category===search)
      .map((el,i)=>(
          <div key={i} className="card" onClick={()=>addCart(el)}>
            <div className="image" key={el.image}>
              <img className="item-img" src={el.image} />
            </div>
            <span className="titleName">{el.title}</span>
            <span className="price">${el.price}</span>
          </div>
        ))
      }
    </div>
    
      </>
    )
  }


  return(
    <><div className="body">
      {data.length>0?
      loaded():
      loader()}
    </div>
        
    </>
  );
};

export default Home;
