/* eslint-disable @typescript-eslint/no-unused-vars */
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

import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { toast } from "sonner";
import { LineSpinner } from "ldrs/react";
import "ldrs/react/LineSpinner.css";

import { useCreateParcelMutation } from "@/redux/features/parcel/parcelApi";
import {
  Type,
  type IParcel,
  type IParcelTableData,
} from "@/redux/features/parcel/parcel.interface";
import { ParcelValidation } from "@/redux/features/parcel/parcel.validationSchema";
import { useGetMeQuery } from "@/redux/features/auth/auth.api";

export function CreateParcelForm() {
  const form = useForm<
    z.infer<typeof ParcelValidation.createParcelValidationSchema>
  >({
    resolver: zodResolver(ParcelValidation.createParcelValidationSchema),
    defaultValues: {
      receiver: "",
      weight: 0,
      note: "",
    },
  });
  const { data: user } = useGetMeQuery(undefined);

  const [createParcel, { isLoading }] = useCreateParcelMutation();

  const onSubmit = async (
    data: z.infer<typeof ParcelValidation.createParcelValidationSchema>
  ) => {
    const formData: IParcelTableData = {
      receiver: data.receiver,
      type: data.type,
      weight: data.weight,
      deliveryAddress: data.deliveryAddress,
      location: data.location,
      note: data.note,
    };
    const parcelData: IParcel = {
      sender: user._id,
      receiver: formData.receiver,
      weight: formData.weight,
      type: formData.type,
      deliveryAddress: formData.deliveryAddress,
      statusLogs: [
        {
          location: formData.location,
          note: formData.note,
        },
      ],
    };

    try {
      const res = await createParcel(parcelData).unwrap();

      if (isLoading) {
        return <LineSpinner size="40" stroke="3" speed="1" color="black" />;
      }
      toast.success("Parcel created successfull");
    } catch (error) {
      toast.error("Something went wrong");
    }
  };
  return (
    <div className="flex flex-col mx-auto items-center w-full  md:p-0 mb-5">
      {isLoading && (
        <div className="fixed inset-0 z-80 flex items-center justify-center ">
          <LineSpinner size="60" stroke="3" speed="1" color="gray" />
        </div>
      )}
      <Form {...form}>
        <h1 className="text-xl md:text-3xl font-bold text-first ">
          Send a Parcel
        </h1>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="w-full md:w-1/2 space-y-3  py-4  rounded-[10px]  "
        >
          <FormField
            control={form.control}
            name="receiver"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-gray-600">Receiver Id</FormLabel>
                <FormControl>
                  <Input
                    placeholder="68994f88f817109b3ce55444"
                    {...field}
                    className="rounded-0"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="type"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-gray-800">Parcel Type</FormLabel>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <FormControl className="w-full">
                    <SelectTrigger>
                      <SelectValue placeholder="Document" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="none" disabled>
                      Select Document
                    </SelectItem>
                    <SelectItem value={Type.document}>Document</SelectItem>
                    <SelectItem value={Type.others}>Others</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="weight"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-gray-600">Weight (kg)</FormLabel>
                <FormControl>
                  <Input
                    placeholder="2"
                    {...field}
                    className="rounded-sm"
                    type="number"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="deliveryAddress"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-gray-600">
                  Delivery Address
                </FormLabel>
                <FormControl>
                  <Input
                    placeholder="Bogura Sadar, Bogura, Bangladesh"
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
            name="location"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-gray-700">Your Location</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Bogura, Bangladesh"
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
            name="note"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-gray-700">Note</FormLabel>
                <FormControl>
                  <Textarea
                    placeholder="Write something"
                    className=""
                    {...field}
                  />
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
            Submit
          </Button>
        </form>
      </Form>
    </div>
  );
}
