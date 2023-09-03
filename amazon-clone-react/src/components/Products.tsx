import axios from "axios";
import { JSXElementConstructor, Key, ReactElement, ReactNode, ReactPortal, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
// import { Link } from "react-router-dom";

type pro = {
  id: string;
  title: string;
  price: string;
  image: string;
  category: string;
};

function Products() {
    const {id} = useParams()
  const [product, setproduct] = useState<pro[]>([]);
//   const [cate, setCate] = useState()


  useEffect(() => {
    axios.get(`https://fakestoreapi.com/products/`).then((res) => {
      setproduct(res.data);
    // const categ =  product.filter((product: { category: string; }) => 
    // product.category == 'jewelery'
    // );

    });
  }, [product]);

  return (
    <>
    <button className="bg-white border-2">jewelery</button>
    <button className="bg-white border-2">jewelery</button>
    <button className="bg-white border-2">jewelery</button>
      <div className="flex w-full">
<div className="justify-between flex flex-wrap gap-10 items-center">
 {product &&
        product.map((item: { id: Key | null | undefined; image: string | undefined; title: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | null | undefined; price: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | null | undefined; }) => (
            <div className="w-1/4 flex flex-col items-center justify-around border-2 h-96" key={item.id}>
       

            <img className="w-2/3" src={item.image} alt="" />
            <h1>{item?.title}</h1>
            <p>{item.price}</p>
            <Link to={`/product/${id}`}>
            <button className="bg-yellow-400">view</button>
            </Link>
            <button className="bg-yellow-400">add to cart</button>
            </div>
       
        ))}
</div>
     
      </div>
    </>
  );
}

export default Products;
