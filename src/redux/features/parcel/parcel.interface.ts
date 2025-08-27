export enum Type {
  document = "document",
  others = "others",
}

export enum Status {
  requested = "requested",
  cancelled = "cancelled",
  blocked = "blocked",
  approved = "approved",
  dispatched = "dispatched",
  in_transit = "in-transit",
  delivered = "delivered",
}

export interface IParcelTableData {
  receiver: string;
  weight: number;
  type: Type;
  deliveryAddress: string;
  location: string;
  note?: string;
}

export interface IParcel {
  sender: string;
  receiver: string;
  weight: number;
  type: Type;
  deliveryAddress: string;
  statusLogs: [
    {
      location: string;
      note?: string;
    }
  ];
}
