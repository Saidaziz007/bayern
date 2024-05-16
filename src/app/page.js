import Image from "next/image";
import styles from "./page.module.css";
import Players from "@/components/players/players";

async function getData() {
  const res = await fetch("https://dummyjson.com/products?limit=35");

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export default async function Home() {
  let data = await getData();
  return (
    <main>
      <section className="hero">
        <div className="container hero-height">
          <div className="hero-all">
            <div className="hero-left">
              <h1>FC BAYERN FAN SITE</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
              <div className="hero-btns">
                <button className="nav-btn-1">BY TOKEN</button>
                <button className="nav-btn-2">REGISTER</button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="players">
        <div className="container">
          <div className="players-top">
            <h1>OUR TEAM</h1>
          </div>
          <div className="players-wrapper">
            <Players data={data} />
          </div>
        </div>
      </section>
    </main>
  );
}
