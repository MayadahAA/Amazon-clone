import axios from "axios"
import { useEffect, useState } from "react";


function cart() {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [cart, setCart] = useState();
    // eslint-disable-next-line react-hooks/rules-of-hooks
    useEffect(() => {

        axios.get(`https://fakestoreapi.com/carts/1`)
        .then((res) => {
            setCart(res.data);
        }
        )
    }, []) 
  return (
    <>
    <h1>{cart.productId}</h1>
    </>
  )
}

export default cart