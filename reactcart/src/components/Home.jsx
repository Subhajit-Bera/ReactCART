import React from "react";
import toast from "react-hot-toast";

import ig1 from "../assets/img1.jpg";
import ig2 from "../assets/img2.jpg";

const Home = () => {
    const productList = [
        {
            name: "Mac Book",
            price: 12000,
            imgSrc: ig1,
            id: "asdhajsdbhjabhsjdfdfv",
        },
        {
            name: "Black Shoes",
            price: 490,
            imgSrc: ig2,
            id: "sdjfdlaajsdbhjabhsjdfdfv",
        },
    ];

    const addToCartHandler = (options) => {
        console.log(options);
        toast.success("Added To Cart");
    }

    return (
        <div className="home">
            {productList.map((i) => (
                <ProductCard
                    key={i.id}
                    imgSrc={i.imgSrc}
                    name={i.name}
                    price={i.price}
                    id={i.id}
                    handler={addToCartHandler}
                />
            ))}
        </div>
    );
};


const ProductCard = ({ name, id, price, handler, imgSrc }) => (
    <div className="productCard">
        <img src={imgSrc} alt={name} />
        <p>{name}</p>
        <h4>${price}</h4>
        <button onClick={() => handler({ name, price, id, quantity: 1, imgSrc })}>
            Add to Cart
        </button>
    </div>
);

export default Home;