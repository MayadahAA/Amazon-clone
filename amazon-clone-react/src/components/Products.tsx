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
    <div className="flex justify-evenly p-10">

    <button className="p-2 rounded-md bg-yellow-400">All</button>
    <button className="p-2 rounded-md bg-slate-100">electronics</button>
    <button className="p-2 rounded-md bg-slate-100">jewelery</button>
    <button className="p-2 rounded-md bg-slate-100">men's clothing</button>
    <button className="p-2 rounded-md bg-slate-100">women's clothing</button>
    </div>
      <div className="flex w-full px-10">
<div className="justify-around flex flex-wrap gap-5 items-center">
 {product &&
        product.map((item: { id: Key | null | undefined; image: string | undefined; title: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | null | undefined; price: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | null | undefined; }) => (
            <div className="w-1/4  flex flex-col gap-3 items-center justify-around rounded-md bg-white border-2 border-slate-100 py-5 h-96" key={item.id}>

            <img className="w-1/3 p-2" src={item.image} alt="" />
            <h1 className="px-2">{item?.title}</h1>
            <p>{item.price}</p>
            <div className="flex gap-3">

            <Link to={`/product/${id}`}>
            <button className="bg-slate-100 rounded-sm p-2">view</button>
            </Link>
            <button className="bg-yellow-400 p-2 rounded-sm">add to cart</button>
            </div>
            </div>
       
        ))}
</div>
     
      </div>
    </>
  );
}

export default Products;
