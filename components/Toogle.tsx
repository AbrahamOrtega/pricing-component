interface ToogleProps {
  toogle: "monthly" | "yearly";
  setToogle: (toogle: "monthly" | "yearly") => void;
}

export default function Toogle({ toogle, setToogle }: ToogleProps) {
  const handleToogle = () => {
    if (toogle === "monthly") {
      setToogle("yearly");
    } else if (toogle === "yearly") {
      setToogle("monthly");
    }
  };

  return (
    <div className="flex text-lightGrayishBlue gap-x-8 items-center">
      <p>Anually</p>
      <label className="toggle-switch">
        <input type="checkbox" onClick={handleToogle} />
        <div className="toggle-switch-background">
          <div className="toggle-switch-handle"></div>
        </div>
      </label>
      <p>Monthly</p>
    </div>
  );
}
