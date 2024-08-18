const Search = () => {
  return (
    <div className=" hidden md:flex flex-1 ">
      <input
        className="flex-1 flex py-2 px-3 text-black border-none outline-none"
        type="text"
        placeholder="Arama Yap..."
      />
      <button className="p-2 bg-orange-800 text-sm border border-transparent">Ara</button>
    </div>
  );
};

export default Search;
