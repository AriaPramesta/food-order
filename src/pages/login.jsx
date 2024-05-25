import Input from "../components/input";
import Button from "../components/button";
import LinkSocial from "../components/link-social";

export function Login() {
  return (
    <div className="w-[375px] min-h-screen px-9 py-16 m-auto shadow-2xl">
      <a
        href="/signup"
        className=" bg-slate-100 px-4 py-2 rounded-xl shadow-xl hover:bg-slate-200 "
      >
        &lt;
      </a>

      <div className="mb-10">
        <h1 className="font-bold text-3xl py-10">Login</h1>
        <form className="flex flex-col gap-8">
          <Input inputType="email" label="Email" inputName="email" />
          <Input inputType="password" label="Password" inputName="password" />
          <a href="">
            <p className="text-center text-orange-500 hover:underline">
              Forgot password?
            </p>
          </a>
          <Button theme="primary">Login</Button>
        </form>
      </div>

      <div>
        <div className="flex items-center">
          <div className="flex-1">
            <div className="h-[1px] border-b border-black"></div>
          </div>
          <p className="px-5">Sign in with</p>
          <div className="flex-1">
            <div className="h-[1px] border-b border-black"></div>
          </div>
        </div>

        <div className=" flex gap-2 justify-between mt-10">
          <LinkSocial urlImg="/assets/facebook.png">Facebook</LinkSocial>
          <LinkSocial urlImg="/assets/google.png">Google</LinkSocial>
        </div>
      </div>
    </div>
  );
}
