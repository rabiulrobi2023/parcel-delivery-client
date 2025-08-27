import z from "zod";
import { Status, Type } from "./parcel.interface";

const createParcelValidationSchema = z.object({
  receiver: z.string("Reveiver is required"),
  weight: z.number().min(0, "Negative value does not allow"),
  deliveryAddress: z.string("Delivery address is required"),
  note: z.string().optional(),
  type: z.enum(Object.values(Type)),
  location:  z.string()
});

const updateParcelStatusValidation = z.object({
  status: z.enum(Object.values(Status)),
  location: z.string(),
  note: z.string().optional(),
});

const confirmDelivaryValidation = z.object({
  location: z.string().optional(),
  note: z.string().optional(),
});

export const ParcelValidation = {
  createParcelValidationSchema,
  updateParcelStatusValidation,
  confirmDelivaryValidation,
};
