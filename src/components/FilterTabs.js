function FilterTabs({ active, setActive }) {

  const tabs = ["all", "marketing"]; // ✅ logic values

  return (
    <div className=" flex gap-8 my-5 text-md px-12
    lg:flex lg:gap-5 lg:mt-10 lg:text-2xl lg:px-10">
      {tabs.map(tab => (
        <button
          key={tab}
          onClick={() => setActive(tab)}
          className={`uppercase ${active === tab ? " text-gray-600 underline" : "text-gray-400"}`}
        >
          {tab} {/* will appear uppercase because of class */}
        </button>
      ))}
    </div>
  );
}

export default FilterTabs;