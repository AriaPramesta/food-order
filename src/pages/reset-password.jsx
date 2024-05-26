import Button from "../components/button";
import Input from "../components/input";
import BackButton from "../components/back-button";

export function Reset() {
  return (
    <div className="w-[375px] min-h-screen px-9 py-14 m-auto shadow-2xl bg-[url('./assets/background.png')] bg-cover">
      <div>
        <div className="mb-[105px]">
          <BackButton url="/" />
        </div>
        <div>
          <h1 className="font-bold text-3xl mb-2">Reset Password</h1>
          <p className="opacity-60 text-xs mb-8">
            Please enter your email address to request a reset password
          </p>
        </div>
      </div>

      <div>
        <form className="flex flex-col gap-10">
          <Input inputType="text" inputName="verification" />

          <Button theme="primary">Send New Password</Button>
        </form>
      </div>
    </div>
  );
}
