export function Welcome() {
  return (
    <div>
      <div>
        <h1>Welcome to FoodHub</h1>
        <h3>Your favourite foods delivered fast at your door.</h3>
      </div>

      <div className="flex items-center">
        <div className="flex-1">
          <div className="h-[1px] border-b border-black"></div>
        </div>
        <p className="px-2">sign in with</p>
        <div className="flex-1">
          <div className="h-[1px] border-b border-black"></div>
        </div>
      </div>

      <div className="flex gap-2">
        <button className=" outline outline-1 outline-black px-4 py-2 rounded-full ">
          Facebook
        </button>
        <button className=" outline outline-1 outline-black px-4 py-2 rounded-full ">
          Google
        </button>
      </div>

      <button className=" outline outline-1 outline-black px-4 py-2 rounded-full ">
        Start with email or phone
      </button>

      <p>
        Already have account?{" "}
        <a href="/" className="underline">
          Sign in
        </a>
      </p>
    </div>
  );
}
