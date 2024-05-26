import Button from "../components/button";
import Input from "../components/input";
import BackButton from "../components/back-button";

export function Verification() {
  return (
    <div className="w-[375px] min-h-screen px-9 py-14 m-auto shadow-2xl bg-[url('./assets/background.png')] bg-cover">
      <div>
        <div className="mb-[105px]">
          <BackButton url="/" />
        </div>
        <div>
          <h1 className="font-bold text-3xl mb-2">Verification Code</h1>
          <p className="opacity-60 text-xs mb-8">
            Please type the verification code sent to example@example.com
          </p>
        </div>
      </div>

      <div>
        <form>
          <Input inputType="text" inputName="verification" />
        </form>
        <p className="text-center text-sm mt-8">
          I dont have recevie code!{" "}
          <a href="#" className="text-orange-500 hover:underline">
            Please resend
          </a>
        </p>
      </div>
    </div>
  );
}
