"use client";
import {Check} from "@gravity-ui/icons";
import {Button, Description, FieldError, Form, Input, Label, TextField} from "@heroui/react";
import {useState} from 'react';
import toast from "react-hot-toast";
import { authClient } from "@/lib/auth-client";
import { useRouter } from "next/navigation";
import {FaEye, FaEyeSlash } from "react-icons/fa";
const SignUp = () => {
    const router = useRouter();
 const onSubmit = async (e) => {
    e.preventDefault();
  const formData = new FormData(e.currentTarget);
  const user = Object.fromEntries(formData.entries()); 
  
  try {
      const { data, error } =
        await authClient.signUp.email({
          name: user.name,
          image: user.image,
          email: user.email,
          password: user.password,
          callbackURL: "/login",
        
        });
      if (error) {
        toast.error(error.message);
        return;
      }

      toast.success("✅ Sign Up Successful!");

      router.push("/login");

    } catch (err) {
      toast.error("❌ Sign Up Failed!");
      console.log(err);
    }
 };
 const [isShowPassword, setIsShowPassword] = useState(false);  
    return (
     <div className="max-w-7xl mx-auto mt-8 mb-8 items-center"> 
     <div>
<h1 className="text-green-500 text-3xl font-bold mb-4">Sign Up</h1>
<p className="text-gray-600 mb-6">Create an account to start sharing your ideas and collaborating with others.</p>
        </div> 
<Form onSubmit={onSubmit} className="flex w-96 flex-col gap-4 border border-gray-200 rounded-xl p-6 shadow-sm">
      <TextField
        isRequired
        name="name"
        type="text">
        <Label>Name</Label>
        <Input placeholder="Enter your name" />
        <FieldError />
      </TextField>
      <TextField
        isRequired
        name="image"
        type="url">
        <Label>Image URL</Label>
        <Input placeholder="Enter the URL of your image" />
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
        <Input placeholder="Enter your email" />
        <FieldError />
      </TextField>
      <TextField
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
       <div className="relative">
           <Input placeholder="Enter your password"  />
           <button
             type="button"
             onClick={() => setIsShowPassword(!isShowPassword)}
             className="absolute right-3 top-1/2 -translate-y-1/2 z-10 cursor-pointer"
             aria-label={isShowPassword ? 'Hide password' : 'Show password'}
           >
             {isShowPassword ?<FaEye /> : <FaEyeSlash /> }
           </button>
         </div>
        <Description>Must be at least 8 characters with 1 uppercase and 1 number</Description>
        <FieldError />
      </TextField>
      <div className="flex gap-2">
        <Button className={'bg-green-500'} type="submit">
          <Check />
          SignUp
        </Button>
        <Button className={'text-green-500'} type="reset" variant="secondary">
          Reset
        </Button>
      </div>
    </Form>   
    </div> 
    );
};

export default SignUp;