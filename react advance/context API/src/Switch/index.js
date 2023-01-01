import "./Styles.css";
import { useTheme } from "../ThemeContext";

const Switch = () => {

  const { theme, toggleTheme } = useTheme();
  return (
    <label className="switch">
      <input
        type="checkbox"
        onChange={toggleTheme}
        checked={theme === "light"}
      />
      <span className="slider round" />
    </label>
  );
};

export default Switch;
