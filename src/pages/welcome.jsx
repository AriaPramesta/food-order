export function Welcome() {
  return (
    <div className="w-[375px] h-[812px] px-9 pt-8 bg-[url('/assets/welcome-bg.png')] m-auto shadow-2xl relative text-xs font-plusJakarta">
      <a
        href="/"
        className="w-[55px] h-[32px] text-xs px-3 py-2 font-semibold rounded-full shadow-xl shadow-black text-[#FE724C] ml-[270px] static bg-white "
      >
        Skip
      </a>

      <div className="w-[311px] h-[184px] static mt-28 mb-[213px]">
        <h1 className="text-5xl font-bold mb-5">
          Welcome to <p className="text-[#FE724C]">FoodHub</p>
        </h1>
        <h3 className=" text-lg">
          Your favourite foods delivered <br /> fast at your door.
        </h3>
      </div>

      <div className="flex items-center mb-[18px]">
        <div className="flex-1">
          <div className="h-[1px] border-b border-black"></div>
        </div>
        <p className="px-2">sign in with</p>
        <div className="flex-1">
          <div className="h-[1px] border-b border-black"></div>
        </div>
      </div>

      <div className="mb-[23px] flex gap-2 justify-between">
        <button className=" px-5 py-2 rounded-full flex gap-1 items-center bg-white shadow-xl shadow-black ">
          <img src="/assets/facebook.png" />
          Facebook
        </button>
        <button className=" px-5 py-2 rounded-full flex gap-1 items-center bg-white shadow-xl shadow-black ">
          <img src="/assets/google.png" />
          Google
        </button>
      </div>

      <button className=" outline outline-1 outline-white text-white px-5 py-3 rounded-full w-full bg-slate-400 mb-6 font-semibold">
        Start with email or phone
      </button>

      <p className="text-center text-sm">
        Already have account?
        <a href="/" className="underline">
          Sign in
        </a>
      </p>
    </div>
  );
}
