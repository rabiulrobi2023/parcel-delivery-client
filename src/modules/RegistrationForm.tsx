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
import { Role } from "@/interfaces/role.interface";
import { zodResolver } from "@hookform/resolvers/zod";
import { Link, useNavigate } from "react-router";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Password from "@/components/ui/password";
import { useUserRegistrationMutation } from "@/redux/features/auth/auth.api";
import { toast } from "sonner";
import { LineSpinner } from "ldrs/react";
import "ldrs/react/LineSpinner.css";

const registrationFormSchema = z
  .object({
    name: z
      .string()
      .min(2, { error: "Name must be at least 2 charaters" })
      .max(40, { error: "Name must be maximum 40 characters" }),
    email: z.email({ error: "Input must be email type" }),
    password: z
      .string()
      .min(6, { error: "Passowrd must be at least 6 characters" })
      .max(16, { error: "Password must be maximum 16 characters" }),
    confirmPassword: z
      .string()
      .min(6, { error: "Passowrd must be at least 6 characters" })
      .max(16, { error: "Password must be maximum 16 characters" }),
    phone: z
      .string()
      .trim()
      .regex(/^01[3-9]\d{8}$/, "Invalid mobile number format"),
    address: z.string(),
    role: z.enum([Role.sender, Role.receiver], {
      error: "Role must be required",
    }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    path: ["confirmPassword"],
    error: "Password does not matched",
  });

export function RegistrationForm() {
  const form = useForm<z.infer<typeof registrationFormSchema>>({
    resolver: zodResolver(registrationFormSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
      phone: "",
      address: "",
      role: undefined,
    },
  });
  const navigate = useNavigate();

  const [userRegistration, { isLoading }] = useUserRegistrationMutation();
  console.log(isLoading);

  const onSubmit = async (data: z.infer<typeof registrationFormSchema>) => {
    console.log(data);
    const userInfo = {
      name: data.name,
      email: data.email,
      password: data.password,
      phone: data.phone,
      address: data.address,
      role: data.role,
    };

    try {
      const result = await userRegistration(userInfo).unwrap();
      if (isLoading) {
        return <LineSpinner size="40" stroke="3" speed="1" color="black" />;
      }
      toast.success("User created successfull");

      navigate("/login");
      console.log(result);
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      toast.error(error.data.message);
    }
  };
  return (
    <div className="w-full  lg:w-1/2 flex flex-col mx-auto items-center  bg-fi">
      {isLoading && (
        <div className="fixed inset-0 z-80 flex items-center justify-center ">
          <LineSpinner size="60" stroke="3" speed="1" color="gray" />
        </div>
      )}
      <Form {...form}>
        <h1 className="text-3xl font-bold text-first py-3">Create Account</h1>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="w-2/3 space-y-3 border-[1px] p-8 rounded-[10px] shadow-2xl"
        >
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-gray-600">Name</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Rabiul Islam"
                    {...field}
                    className="rounded-sm"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

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
            name="phone"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-gray-600">Phone Number</FormLabel>
                <FormControl>
                  <Input
                    placeholder="017500000001"
                    {...field}
                    className="rounded-sm"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="address"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-gray-700">Address</FormLabel>
                <FormControl>
                  <Textarea
                    placeholder="Railgate, Bogura Sadar, Bogura"
                    className=""
                    {...field}
                  />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="role"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-gray-800">Role</FormLabel>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <FormControl className="w-full">
                    <SelectTrigger>
                      <SelectValue placeholder="Select role" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="none" disabled>
                      Select Role
                    </SelectItem>
                    <SelectItem value={Role.sender}>Sender</SelectItem>
                    <SelectItem value={Role.receiver}>Reveiver</SelectItem>
                  </SelectContent>
                </Select>
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
          <FormField
            control={form.control}
            name="confirmPassword"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-gray-800">
                  Confirm Password
                </FormLabel>
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
          >Submit</Button>
          <p className="text-center">
            Already have an account?{" "}
            <span className="text-first font-bold">
              <Link to={"/login"}>Login</Link>
            </span>
          </p>
        </form>
      </Form>
    </div>
  );
}
