import { PLAYER } from "@/static";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Players = ({ data }) => {
  let director = data?.products.filter(
    (el) => PLAYER[el.id]?.cat === "DIRECTOR"
  );
  let directors = director?.map((el) => (
    <div key={el.id} className="player-card">
      <div className="player-img">
        <Link href={`/products/${el.id}`}>
          <Image src={PLAYER[el.id]?.img} alt="img" width={200} height={200} />
        </Link>
        <h3 className="player-number">{PLAYER[el.id]?.number}</h3>
      </div>
      <div className="player-info">
        <h1>{PLAYER[el.id]?.title}</h1>
      </div>
    </div>
  ));
  let coach = data?.products.filter((el) => PLAYER[el.id]?.cat === "COACH");
  let coaches = coach?.map((el) => (
    <div key={el.id} className="player-card">
      <div className="player-img">
        <Link href={`/products/${el.id}`}>
          <Image src={PLAYER[el.id]?.img} alt="img" width={200} height={200} />
        </Link>
        <h3 className="player-number">{PLAYER[el.id]?.number}</h3>
      </div>
      <div className="player-info">
        <h1>{PLAYER[el.id]?.title}</h1>
      </div>
    </div>
  ));
  let goalkeeper = data?.products.filter(
    (el) => PLAYER[el.id]?.cat === "GOALKEEPER"
  );
  let goalkeepers = goalkeeper?.map((el) => (
    <div key={el.id} className="player-card">
      <div className="player-img">
        <Link href={`/products/${el.id}`}>
          <Image src={PLAYER[el.id]?.img} alt="img" width={200} height={200} />
        </Link>
        <h3 className="player-number">{PLAYER[el.id]?.number}</h3>
      </div>
      <div className="player-info">
        <h1>{PLAYER[el.id]?.title}</h1>
      </div>
    </div>
  ));
  let defender = data?.products.filter(
    (el) => PLAYER[el.id]?.cat === "DEFENDER"
  );
  let defenders = defender?.map((el) => (
    <div key={el.id} className="player-card">
      <div className="player-img">
        <Link href={`/products/${el.id}`}>
          <Image src={PLAYER[el.id]?.img} alt="img" width={200} height={200} />
        </Link>
        <h3 className="player-number">{PLAYER[el.id]?.number}</h3>
      </div>
      <div className="player-info">
        <h1>{PLAYER[el.id]?.title}</h1>
      </div>
    </div>
  ));
  let midfielder = data?.products.filter(
    (el) => PLAYER[el.id]?.cat === "MIDFIELDERS"
  );
  let midfielders = midfielder?.map((el) => (
    <div key={el.id} className="player-card">
      <div className="player-img">
        <Link href={`/products/${el.id}`}>
          <Image src={PLAYER[el.id]?.img} alt="img" width={200} height={200} />
        </Link>
        <h3 className="player-number">{PLAYER[el.id]?.number}</h3>
      </div>
      <div className="player-info">
        <h1>{PLAYER[el.id]?.title}</h1>
      </div>
    </div>
  ));
  let forward = data?.products.filter((el) => PLAYER[el.id]?.cat === "FORWARD");
  let forwards = forward?.map((el) => (
    <div key={el.id} className="player-card">
      <div className="player-img">
        <Link href={`/products/${el.id}`}>
          <Image src={PLAYER[el.id]?.img} alt="img" width={200} height={200} />
        </Link>
        <h3 className="player-number">{PLAYER[el.id]?.number}</h3>
      </div>
      <div className="player-info">
        <h1>{PLAYER[el.id]?.title}</h1>
      </div>
    </div>
  ));
  return (
    <div className="player-all">
      <div className="player-director">
        <div className="player-top">
          <h1>DIRECTOR</h1>
        </div>
        <div className="player-wrapper">{directors}</div>
      </div>
      <div className="player-coach">
        <div className="player-top">
          <h1>COACHES</h1>
        </div>
        <div className="player-wrapper">{coaches}</div>
      </div>
      <div className="player-goalkeeper">
        <div className="player-top">
          <h1>GOALKEEPERS</h1>
        </div>
        <div className="player-wrapper">{goalkeepers}</div>
      </div>
      <div className="player-defender">
        <div className="player-top">
          <h1>DEFENDERS</h1>
        </div>
        <div className="player-wrapper">{defenders}</div>
      </div>
      <div className="player-midfielder">
        <div className="player-top">
          <h1>MIDFIELDERS</h1>
        </div>
        <div className="player-wrapper">{midfielders}</div>
      </div>
      <div className="player-forward">
        <div className="player-top">
          <h1>FORWARDS</h1>
        </div>
        <div className="player-wrapper">{forwards}</div>
      </div>
    </div>
  );
};

export default Players;
