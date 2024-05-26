import Input from "../components/input";
import Button from "../components/button";
import LinkSocial from "../components/link-social";
import BackButton from "../components/back-button";

export function Login() {
  return (
    <div className="w-[375px] min-h-screen px-9 py-14 m-auto shadow-2xl bg-[url('./assets/background.png')] bg-cover">
      <BackButton url="/signup" />

      <div className="mb-10">
        <h1 className="font-bold text-3xl py-10">Login</h1>
        <form className="flex flex-col gap-8">
          <Input inputType="email" label="Email" inputName="email" />
          <Input inputType="password" label="Password" inputName="password" />
          <a href="">
            <p className="text-center text-orange-500 hover:underline text-sm">
              Forgot password?
            </p>
          </a>
          <Button theme="primary">Login</Button>
        </form>
      </div>

      <div>
        <div className="flex items-center text-sm">
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
