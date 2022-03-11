import { swapi } from './../api/swapi';
import { AxiosResponse } from "axios";
import { IVehicle } from "../interfaces/vehicle";

export class VehicleService {
    static getVehicle = (id: string): Promise<AxiosResponse<IVehicle>> => {
        return swapi.get(`/vehicles/${id}`)
    }
}