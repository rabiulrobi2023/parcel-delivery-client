import { Button } from "@/components/ui/button";
import z from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Link, useNavigate } from "react-router";
import Password from "@/components/ui/password";

import { toast } from "sonner";
import { LineSpinner } from "ldrs/react";
import "ldrs/react/LineSpinner.css";

import Logo from "@/components/ui/logo";
import { loginFormSchema } from "./loginForm.schema";
import { useUserLoginMutation } from "@/redux/features/auth/auth.api";

export function LoginForm() {
  const form = useForm<z.infer<typeof loginFormSchema>>({
    resolver: zodResolver(loginFormSchema),
    defaultValues: {
      email: "admin@gmail.com",
      password: "123456",
    },
  });
  const navigate = useNavigate();

  const [userRegistration, { isLoading }] = useUserLoginMutation();

  const onSubmit = async (data: z.infer<typeof loginFormSchema>) => {
    const userInfo = {
      email: data.email,
      password: data.password,
    };

    try {
      await userRegistration(userInfo).unwrap();
      if (isLoading) {
        return <LineSpinner size="40" stroke="3" speed="1" color="black" />;
      }
      toast.success("User Login successfull");

      navigate("/");

      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      toast.error(error.data.message||"Something went wrong");
    }
  };
  return (
    <div className="flex flex-col mx-auto items-center w-full px-4 md:p-0">
      {isLoading && (
        <div className="fixed inset-0 z-80 flex items-center justify-center ">
          <LineSpinner size="60" stroke="3" speed="1" color="gray" />
        </div>
      )}
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="w-full md:w-1/3 space-y-3 border-[1px] p-8  rounded-[10px] shadow-2xl "
        >
          <div className="flex flex-col items-center gap-3">
            <Link to={"/"}>
              {" "}
              <Logo></Logo>
            </Link>
            <h1 className="text-xl md:text-3xl font-bold text-first text-center">
              Login
            </h1>
          </div>
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-gray-600">Email</FormLabel>
                <FormControl>
                  <Input
                    placeholder="rabiul@gmail.com"
                    {...field}
                    className="rounded-sm"
                    type="email"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-gray-800">Password</FormLabel>
                <FormControl>
                  <Password {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button
            disabled={isLoading}
            type="submit"
            className="bg-second font-bold w-full rounded-sm hover:bg-first mt-5"
          >
            Login
          </Button>
          <p className="text-center">
            Do not have an account?{" "}
            <span className="text-first font-bold">
              <Link to={"/registration"}>Sign Up</Link>
            </span>
          </p>
          <p className="text-center">
            Back to{" "}
            <span className="text-second font-bold underline">
              <Link to={"/"}>Home</Link>
            </span>
          </p>
        </form>
      </Form>
    </div>
  );
}
