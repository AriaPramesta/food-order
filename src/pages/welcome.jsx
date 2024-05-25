import LinkSocial from "../components/link-social";
import Button from "../components/button";

export function Welcome() {
  return (
    <div className="max-w-[375px] min-h-screen px-9 pt-8 bg-[url('/assets/welcome-bg.png')] m-auto shadow-2xl relative text-xs font-plusJakarta bg-cover flex flex-col">
      <div className="flex-1">
        <a
          href="/"
          className="w-[55px] h-[32px] text-xs px-3 py-2 font-semibold rounded-full shadow-xl shadow-black text-[#FE724C] ml-[270px] static bg-white "
        >
          Skip
        </a>

        <div className="w-[311px] h-[184px] static mt-28">
          <h1 className="text-5xl font-bold mb-5">
            Welcome to <p className="text-[#FE724C]">FoodHub</p>
          </h1>
          <h3 className=" text-lg">
            Your favourite foods delivered <br /> fast at your door.
          </h3>
        </div>
      </div>

      <div className="mb-10">
        <div className="flex items-center">
          <div className="flex-1">
            <div className="h-[1px] border-b border-black"></div>
          </div>
          <p className="px-5">sign in with</p>
          <div className="flex-1">
            <div className="h-[1px] border-b border-black"></div>
          </div>
        </div>

        <div className=" flex gap-2 justify-between mt-10">
          <LinkSocial urlImg="/assets/facebook.png">Facebook</LinkSocial>
          <LinkSocial urlImg="/assets/google.png">Google</LinkSocial>
        </div>

        <div className="mt-10">
          <Button theme="secondary" isFull>
            Start with email or phone
          </Button>
        </div>

        <p className="text-center text-sm mt-10">
          Already have account?
          <a href="/" className="underline">
            Sign in
          </a>
        </p>
      </div>
    </div>
  );
}
