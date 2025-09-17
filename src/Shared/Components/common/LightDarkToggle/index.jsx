import styles from "./index.module.css";
import useTheme from "./hooks/switchTheme";

export default function LightDarkToggle() {
  const { theme, toggleTheme } = useTheme("light");

  return (
    <div className={styles["toggle-container"]}>
      <label className={styles["switch"]}>
        <input
          type="checkbox"
          id="mode-toggle"
          checked={theme === "dark"}
          onChange={toggleTheme}
        />
        <span className={styles["slider"]}></span>
      </label>
    </div>
  );
}
