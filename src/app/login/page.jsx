"use client";
import {Check} from "@gravity-ui/icons";
import {Button, Description, FieldError, Form, Input, Label, TextField} from "@heroui/react";
import React from 'react';
import toast from "react-hot-toast";
import { authClient } from "@/lib/auth-client";
import { useRouter } from "next/navigation";
const SignIn = () => {
    const router = useRouter();
 const onSubmit = async (e) => {
    e.preventDefault();
  const formData = new FormData(e.currentTarget);
  const user = Object.fromEntries(formData.entries()); 
  
  try {
      const { data, error } =
        await authClient.signIn.email({
          email: user.email,
          password: user.password,
          callbackURL: "/home",
        
        });
      if (error) {
        toast.error(error.message);
        return;
      }

      toast.success("✅ Sign In Successful!");

      router.push("/home");

    } catch (err) {
      toast.error("❌ Sign In Failed!");
      console.log(err);
    }
 }  
    return (
     <div className="max-w-7xl mx-auto mt-8 mb-8 items-center"> 
     <div>
<h1 className="text-green-500 text-3xl font-bold mb-4">Sign In</h1>
<p className="text-gray-600 mb-6">Sign in to your account to continue.</p>
        </div> 
<Form onSubmit={onSubmit} className="flex w-96 flex-col gap-4 border border-gray-200 rounded-xl p-6 shadow-sm">
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
        <Input placeholder="Enter your email" />
        <FieldError />
      </TextField>
      <TextField
        isRequired
        minLength={8}
        name="password"
        type="password"
        validate={(value) => {
          if (value.length < 8) {
            return "Password must be at least 8 characters";
          }
          return null;
        }}
      >
        <Label>Password</Label>
        <Input placeholder="Enter your password" />
        <Description>Must be at least 8 characters</Description>
        <FieldError />
      </TextField>
      <div className="flex gap-2">
        <Button className={'bg-green-500'} type="submit">
          <Check />
          SignIn
        </Button>
        <Button className={'text-green-500'} type="reset" variant="secondary">
          Reset
        </Button>
      </div>
    </Form>   
    </div> 
    );
};

export default SignIn;