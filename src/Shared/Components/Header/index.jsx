import styles from "./index.module.css"; // <-- add this
import LightDarkToggle from "../common/LightDarkToggle";
import lightUrl from "@assets/light-mode.svg";
import DarkUrl from "@assets/dark-mode.svg";

export default function Header({ author }) {
  return (
    <header className={styles.header}>
      <h1>Earnings Estimator</h1>
      <p>By: {author}</p>

      <div
        style={{ display: "inline-flex", alignItems: "center", gap: ".5rem" }}
      >
        <img
          src={lightUrl}
          alt="Light mode"
          width={24}
          height={24}
          fill="#ffffffff"
        />
        <LightDarkToggle />
        <img
          src={DarkUrl}
          alt="Dark mode"
          width={24}
          height={24}
          fill="#ffffffff"
        />
      </div>
    </header>
  );
}
