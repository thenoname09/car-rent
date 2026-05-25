"use client";
import LoginLeft from "@/components/LoginLeft";

import { authClient } from "@/lib/auth-client";
import { Check } from "@gravity-ui/icons";

import {
  Button,
  Description,
  FieldError,
  Form,
  Input,
  Label,
  Separator,
  TextField,
} from "@heroui/react";
import { Card } from "@heroui/react";

import Link from "next/link";
import { redirect, useRouter } from "next/navigation";
import { useState } from "react";
import { BsGoogle } from "react-icons/bs";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const LoginPage = () => {
  const router = useRouter();

  const [error, setError] = useState("");

  const onSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);

    const user = Object.fromEntries(formData.entries());

    const { data, error } = await authClient.signIn.email({
      email: user.email,
      password: user.password,
    });

    console.log({ data, error });
    

    if (data) {
      router.refresh();
      redirect("/");
    }
    if (error) {
      setError(error.message || "Registration failed. Please try again.");
      return;
    }
  };

  const handleGoogleLogIn = async () => {
    await authClient.signIn.social({
      provider: "google",
    });
  };

  const [isShowPassword, setIsShowPassword] = useState(false);
  return (
    <div className=" bg-[#DDE6ED]/30 flex items-center justify-center p-4">
      <div className="w-full max-w-6xl grid grid-cols-1 lg:grid-cols-2 rounded-3xl overflow-hidden shadow-2xl border border-[#DDE6ED]">
        <LoginLeft></LoginLeft>

        <Card className="items-center pt-10  ">
          <div className="text-left items-start ">
            <p className="text-[#9DB2BF] text-xs font-bold tracking-[3px] uppercase mb-2 ">
              Login
            </p>
            <h1 className="text-[#27374D] text-5xl font-black mb-1">
              Welcome back!
            </h1>
            <p className="text-[#7D7D7D] text-sm ml-3 pt-1 mb-7">
              Don't have an account?
              <Link
                href="/register"
                className="text-[#526D82] font-semibold hover:text-[#27374D] transition-colors"
              >
                Create one
              </Link>
            </p>
          </div>
          <Description>
            {error && (
              <p className="text-red-500 text-sm text-center mb-2 px-5 font-semibold">
                {error}
              </p>
            )}
          </Description>
          <Form className="flex w-96 flex-col gap-4" onSubmit={onSubmit}>
            <TextField
              isRequired
              name="email"
              type="email"
              validate={(value) => {
                if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
                  return "Please enter a valid email address";
                }
                return null;
              }}
            >
              <Label>Email</Label>
              <Input placeholder="...@example.com" />
              <FieldError />
            </TextField>

            <TextField
              className={"relative"}
              isRequired
              minLength={8}
              name="password"
              type={isShowPassword ? "text" : "password"}
              validate={(value) => {
                if (value.length < 8) {
                  return "Password must be at least 8 characters";
                }
                if (!/[A-Z]/.test(value)) {
                  return "Password must contain at least one uppercase letter";
                }
                if (!/[0-9]/.test(value)) {
                  return "Password must contain at least one number";
                }

                return null;
              }}
            >
              <Label>Password</Label>
              <Input placeholder="Enter your password" />
              <span
                className="absolute right-4 top-9 cursor-pointer"
                onClick={() => setIsShowPassword(!isShowPassword)}
              >
                {" "}
                {isShowPassword ? <FaEye /> : <FaEyeSlash />}{" "}
              </span>
              <Description>
                Must be at least 8 characters with 1 uppercase and 1 number
              </Description>
              <FieldError />
            </TextField>

            <div className="flex gap-2 mt-2">
              <Button type="submit" className={"w-full"}>
                Login
              </Button>
            </div>
          </Form>

          <div className="flex justify-center items-center text-muted gap-9">
            <Separator variant="default" />
            or 
            <Separator variant="default" />
          </div>
           

          <div className="flex justify-center items-center w-auto md:w-96 mx-auto">
           
            <Button
              onClick={handleGoogleLogIn}
              variant="outline"
              className=" w-full text-center  items-center"
            >
              <BsGoogle /> LogIn With Google
            </Button>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default LoginPage;
