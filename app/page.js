import Image from "next/image";
import styles from "./page.module.css";
import Melon from "./Melon";

export default function Home() {
  return (
    <div>
      <p>MUSIC CHART</p>
      <Melon />
    </div>
  );
}
