export function Home() {
  return (
    <div className="p-9 w-[375px] h-screen shadow-2xl m-auto">
      <div className="flex justify-between mb-8">
        <button className="px-4 bg-slate-100 rounded-xl shadow-md">=</button>

        <div className="text-center">
          <p className="text-xs">Deliver to</p>
          <p className="text-orange-500 text-xs">4102 Pretty View Lane</p>
        </div>

        <div>
          <img
            src="./assets/profile.png"
            alt="profile"
            className="rounded-xl w-10 "
          />
        </div>
      </div>

      <h1 className="font-bold text-2xl mb-5">What would you like to order</h1>

      <input
        type="text"
        name="search"
        id="search"
        placeholder="Find for food or restaurant..."
        className=" h-12 outline outline-1 outline-gray-500 focus:outline-orange-500 rounded-lg p-2"
      />
    </div>
  );
}
