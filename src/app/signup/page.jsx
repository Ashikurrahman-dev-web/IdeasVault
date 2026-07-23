"use client";
import {Check} from "@gravity-ui/icons";
import {Button, Description, FieldError, Form, Input, Label, TextField,Card} from "@heroui/react";
import {useState} from 'react';
import toast from "react-hot-toast";
import { authClient } from "@/lib/auth-client";
import { useRouter } from "next/navigation";
import {FaEye, FaEyeSlash } from "react-icons/fa";
import { uploadImage } from "@/utils/uploadImage";
const SignUp = () => {
    const router = useRouter();
    const [preview, setPreview] = useState(null);
    const [imageFile, setImageFile] = useState(null);
     const handleImageChange = (e) => {
        const file = e.target.files?.[0];
        if (file) {
            setImageFile(file);
            setPreview(URL.createObjectURL(file));
        }
    };
 const onSubmit = async (e) => {
    e.preventDefault();
  const formData = new FormData(e.currentTarget);
  const user = Object.fromEntries(formData.entries()); 
   let imageUrl = "";
        if (imageFile) {
            try {
                imageUrl = await uploadImage(imageFile);
            } catch (uploadErr) {
                toast.error("Image upload failed!");
                setLoading(false);
                return;
            }
        } else {
            toast.error("Please upload an avatar first");
            setLoading(false);
            return;
        };
  try {
      const { data, error } =
        await authClient.signUp.email({
          name: user.name,
          image: imageUrl,
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
      <Card className="border mx-auto w-[420px] py-8 px-6 mt-10 shadow-lg rounded-2xl"> 
    
<h1 className="text-center text-green-500 text-3xl font-bold mb-4">Sign Up</h1>
<p className="text-center text-gray-600 mb-6">Create an account to start sharing your ideas and collaborating with others.</p>
        
<Form onSubmit={onSubmit} className="flex w-96 flex-col gap-4 border border-gray-200 rounded-xl p-6 shadow-sm">
<div className="flex flex-col items-center gap-3 mb-4 w-full">
                        <div className="relative">
<div className="w-24 h-24 rounded-full overflow-hidden border-2 border-red-500 shadow-lg bg-slate-800">
                                {preview ? (
<img src={preview} alt="Profile Preview" className="w-full h-full object-cover" />
                                ) : (
                    <div className="w-full h-full flex items-center justify-center text-slate-500">
                                        <FaUser size={32} />
                                    </div>
                                )}
                            </div>
<label htmlFor="image" className="absolute bottom-0 right-0 bg-green-500 hover:bg-green-600 text-white p-2 rounded-full cursor-pointer shadow-lg transition">
                                <FaCamera size={12} />
                            </label>
                        </div>
<input id="image" name="image" type="file" accept="image/*" className="hidden" onChange={handleImageChange} />
                        <p className="text-xs text-green-500">Upload your profile picture</p>
                    </div>
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
   </Card>
    );
};

export default SignUp;