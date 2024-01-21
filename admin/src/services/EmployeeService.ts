import { GetAllEmployeeModel } from "../models/responses/employees/GetAllEmployees";
import { EmployeeModel } from "../models/responses/employees/GetEmployee";
import axiosInstance from "../utils/axiosInsterceptors";

class EmployeeService{
    getAll(){
        return axiosInstance.get<GetAllEmployeeModel>("employees/getall")
    }

    getById(id:number){
        return axiosInstance.get<EmployeeModel>(`employee/${id}`);
    }
}

export default EmployeeService;