import Button from "../components/button";
import Input from "../components/input";
import LinkSocial from "../components/link-social";

export function SignUp() {
  return (
    <div className="w-[375px] min-h-screen px-9 py-14 m-auto shadow-2xl bg-[url('./assets/background.png')] bg-cover">
      <div className="">
        <h1 className="font-bold text-3xl py-10">Sign Up</h1>
        <form className="flex flex-col gap-8">
          <Input inputType="text" label="Name" inputName="name" />
          <Input inputType="email" label="Email" inputName="email" />
          <Input inputType="password" label="Password" inputName="password" />

          <Button theme="primary">Sign Up</Button>
        </form>
        <p className="text-center py-16 text-sm">
          Already have an account?{" "}
          <a href="/login" className="text-orange-500 hover:underline">
            Login
          </a>
        </p>
      </div>

      <div>
        <div className="flex items-center text-sm">
          <div className="flex-1">
            <div className="h-[1px] border-b border-black"></div>
          </div>
          <p className="px-5">Sign up with</p>
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
