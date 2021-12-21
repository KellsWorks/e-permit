import axios, { AxiosError } from "axios";
import UrlService from "./UrlService";

interface Props{
    applicant_id: string,
    importer_name: string,
    importer_address: string,
    importer_identification: string,
    type: string,
    importer_id_number: string,
    country_of_import: string,
    exporter_name: string,
    exporter_address: string,
    exporter_identification: string,
    exporter_id_number: string,
    country_of_export: string,
    purpose: string,
    date_submitted: string,
    proof_of_payment: string,
    waybill: string,
    file: File
}

class CitesApplicationService{

    async processApplication(props: Props){

        console.log(props);

        const instance = axios.create({
            baseURL: "http://localhost:8000",
            withCredentials: false,
            headers: {
                'Access-Control-Allow-Origin' : 'http://localhost:8000',
                 "Content-Type": "multipart/form-data"
            }
                })
        
        try{

            const response = await (
                await (await instance.post(UrlService.createCitesApplication(), props))
            )
            
            return response
        }
        catch(error){
            const err = error as AxiosError
            console.log(err);
            return false
        }
    }
}

export default new CitesApplicationService();