import axios from "axios";
import { useEffect, useState } from "react";
import Products from "../components/Products";
import { useParams } from "react-router-dom";


type pro = {
    id: string;
    title: string;
    price: string;
    image: string;
    category: string;
  };
  
function ProductDetiles() {
    const [product, setproduct] = useState<pro[]>([]);
    const {id} = useParams()

    

    
 const p =
    axios.get(`https://fakestoreapi.com/products/${id}`).then((res) => {
        setproduct(res.data);

    });

  return (
    <>
       {p && p.map((item: {
            image: string | undefined;
            price: string;
            title: string; 
            id : string
}) => (
            <div className="w-1/4 flex flex-col items-center justify-around border-2 h-96" key={item.id}>
       

            <img className="w-2/3" src={item.image} alt="" />
            <h1>{item?.title}</h1>
            <p>{item.price}</p>
            </div>
       
        ))}
    </>
  )
}

export default ProductDetiles