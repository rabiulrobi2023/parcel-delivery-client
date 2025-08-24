import { useTheme } from "@/hooks/useTheme";

const ModeToggler = () => {
  const { theme = "light", setTheme } = useTheme();

  return (
    <label
      htmlFor="AcceptConditions"
      className="relative block h-8 w-14 rounded-full bg-gray-300 transition-colors [-webkit-tap-highlight-color:_transparent] has-checked:bg-gray-800"
    >
      <input
        onClick={() => setTheme(theme === "light" ? "dark" : "light")}
        type="checkbox"
        id="AcceptConditions"
        className="peer sr-only"
      />

      <span className="absolute inset-y-0 start-0 m-1 size-6 rounded-full bg-white transition-[inset-inline-start] peer-checked:start-6"></span>
    </label>
  );
};

export default ModeToggler;
