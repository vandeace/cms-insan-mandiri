export interface MachineModel {
  id: string;
  modelName: string;
  machineTypeBrandId: string;
  specifications: string;
  photos: {
    id: string;
    url: string;
    machineTypeId: string;
    createdAt: string;
    updatedAt: string;
  }[];
  createdAt: Date;
  updatedAt: Date;
  machineTypeBrand: {
    id: string;
    name: string;
  };
}

export interface CreateMachineModelPayload {
  modelName: string;
  machineTypeBrandId: string;
  specifications: string;
  photos: string[];
}

export interface UpdateMachineModelPayload extends Partial<CreateMachineModelPayload> {}
