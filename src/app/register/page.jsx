"use client";
import RegisterLeft from "@/components/RegisterLeft";
import { authClient } from "@/lib/auth-client";
import { Check } from "@gravity-ui/icons";
import {
  Button,
  Description,
  FieldError,
  Form,
  Input,
  Label,
  TextField,
} from "@heroui/react";
import { Card } from "@heroui/react";

import Link from "next/link";
import { redirect, useRouter } from "next/navigation";
import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";


const RegisterPage = () => {
  const router = useRouter();
  const [error, setError] = useState("");
  const onSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);

    const user = Object.fromEntries(formData.entries());

    const { data, error } = await authClient.signUp.email({
      name: user.name,
      email: user.email,
      password: user.password,
      image: user.image,
    });

    if (data) {
      router.refresh();
      redirect("/");
    }
    if (error) {
      setError(error.message || "Registration failed. Please try again.");
      return;
    }
  };
  const [isShowPassword, setIsShowPassword] = useState(false);
  return (
    <div className=" bg-[#DDE6ED]/30 flex items-center justify-center p-4">
      <div className="w-full max-w-6xl grid grid-cols-1 lg:grid-cols-2 rounded-3xl overflow-hidden shadow-2xl border border-[#DDE6ED]">
        <RegisterLeft></RegisterLeft>

        <Card className="items-center  ">
          <div className="">
            <p className="text-[#9DB2BF] text-xs font-bold tracking-[3px] uppercase mb-2">
              Register
            </p>
            <h1 className="text-[#27374D] text-4xl font-black mb-1">
              Welcome to DriveFleet
            </h1>
            <p className="text-[#7D7D7D] text-sm mb-7">
              Already have an account?
              <Link
                href="/login"
                className="text-[#526D82] font-semibold hover:text-[#27374D] transition-colors"
              >
                Login
              </Link>
            </p>
          </div>
          <Description>
            {error && (
              <p className="text-red-500 text-sm text-center mb-3 px-6 font-semibold">
                {error}
              </p>
            )}
          </Description>
          <Form className="flex w-96 flex-col gap-4" onSubmit={onSubmit}>
            <TextField
              isRequired
              name="name"
              validate={(value) => {
                if (value.length < 3) {
                  return "Name must be at least 3 characters";
                }
                return null;
              }}
            >
              <Label>Name</Label>
              <Input placeholder="Your Name" />
              <FieldError />
            </TextField>

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

            <TextField isRequired name="image" type="text">
              <Label>Image URL</Label>
              <Input placeholder="Image URL" />
              <FieldError />
            </TextField>

            <div className="flex gap-2">
              <Button type="submit" className={"w-full"}>
                <Check />
                Register
              </Button>
            </div>
          </Form>
        </Card>
      </div>
    </div>
  );
};

export default RegisterPage;
