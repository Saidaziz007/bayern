import Image from "next/image";
import { getData } from "@/api";
import React from "react";
import { PLAYER } from "@/static";
import "./single.css";
import logo from "@/assets/logo.svg";

const SingleProduct = async ({ params: { id } }) => {
  let data = await getData(`/products/${id}`);
  return (
    <div className="single">
      <div className="container">
        <div className="single-all">
          <div className="single-left">
            <Image
              src={PLAYER[data.id]?.img}
              alt="img"
              width={200}
              height={200}
            />
          </div>
          <div className="single-right">
            <div className="single-right-1">
              <Image src={logo} alt="img" width={200} height={200} />
              <div className="single-right-2">
                <h1>{PLAYER[data.id].cat}</h1>
                <h1>{PLAYER[data.id].title}</h1>
                <h1>{PLAYER[data.id].number}</h1>
              </div>
            </div>
            <div className="single-right-info">
              <div className="single-right-info-1">
                <h3>Goals: {data.price}</h3>
                <h3>Assists: {data.price / 2}</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;
