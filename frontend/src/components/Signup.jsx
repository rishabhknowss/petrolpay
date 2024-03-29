import { Button } from "../components/Button";
import { Heading } from "../components/Heading";
import { InputBox } from "../components/InputBox";
import { SubHeading } from "../components/SubHeading";

export const Signup = () => {
  return (
    <div className="bg-blue-300 h-screen flex justify-center">
      <div className="flex flex-col justify-center">
        <div className="rounded-lg bg-white w-80 text-center p-2 h-max px-4">
          <Heading label={"Sign Up"} />
          <SubHeading label={"Enter your details to create your account"} />
          <InputBox placeholder="hello@kapoor.com" label={"Email"} />
          <InputBox placeholder="123456" label={"Password"} />
          <InputBox placeholder="Steve Jobs" label={"Name"} />
          <InputBox placeholder="UP32XXXX" label={"Vehicle No"} />
          <InputBox placeholder="FOPPXXXXX" label={"Driving License"} />
          <div className="pt-4">
            <Button label={"Sign Up"} />
          </div>
        </div>
      </div>
    </div>
  );
};
