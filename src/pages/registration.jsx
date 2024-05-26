import Button from "../components/button";
import Input from "../components/input";
import BackButton from "../components/back-button";

export function Registration() {
  return (
    <div className="w-[375px] min-h-screen px-9 py-14 m-auto shadow-2xl bg-[url('./assets/background.png')] bg-cover">
      <div>
        <div className="mb-[105px]">
          <BackButton url="/" />
        </div>
        <div>
          <h1 className="font-bold text-3xl mb-2">Registration</h1>
          <p className="opacity-60 text-xs mb-8">
            Enter your phone number to verify your account
          </p>
        </div>
      </div>

      <div>
        <form className="flex flex-col gap-10">
          <Input inputType="text" inputName="verification" />

          <Button theme="primary">Send</Button>
        </form>
      </div>
    </div>
  );
}
