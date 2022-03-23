import Head from "next/head";
import data from "../questions.json";
import { useDeadPlantWrapper } from "../context/deadplantcontext";
import { useEffect, useState } from "react";
import Link from "next/link";

export default function Home() {
  const { deadplants, addDeadPlant, resetDeadPlants } = useDeadPlantWrapper();
  const [message, setMessage] = useState("");

  function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  }

  useEffect(() => {
    if (deadplants > 0) {
      setMessage(data[1].message[getRndInteger(0, data[1].message.length)]);
    } else {
      setMessage("");
    }
  }, [deadplants]);

  return (
    <div className>
      <Head>
        <title>Why My Plant Die</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="">
        <h1 className="">WHAT WRONG WITH YOUR PLANT</h1>

        <div className="">
          <h2>PLANTS KILLED</h2>
          <p>
            {message} {deadplants} plants killed
          </p>
        </div>
        <div className="">
          <div className="" onClick={resetDeadPlants}>
            <p>RESET</p>
          </div>

          {data.map((ele) => {
            if (ele.type == "counter") {
              return (
                <div onClick={addDeadPlant} className="">
                  <h1>HELP MY PLANT DEAD!</h1>
                </div>
              );
            }
          })}
        </div>
        <Link href="/plantdoctor">
          <a>
            <div className="">
              <h1>HELP MY PLANT DYING</h1>
            </div>
          </a>
        </Link>
      </main>

      <footer className="">Powered by DEAD PLANTS</footer>
    </div>
  );
}
