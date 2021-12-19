import axios from "axios";
import UrlService from "./UrlService";

interface Props{
    file: File
    applicant_id: string,
    type: string,
    exporter_name: string,
    exporter_address: string,
    exporter_identification: string,
    exporter_id_number: string,
    country_of_export: string,
    importer_name: string,
    importer_address: string,
    importer_identification: string,
    importer_id_number: string,
    country_of_import: string,
    purpose: string,
    date_submitted: string,
    proof_of_payment: string,
    waybill: string,
}

class CitesApplicationService{

    async processApplication(props: Props){

        const formData =  new FormData()

        formData.append('file', props.file)

        const instance = axios.create({
            baseURL: "http://localhost:8000",
            withCredentials: false,
            headers: {
                'Access-Control-Allow-Origin' : 'http://localhost:8000',
                "Content-Type": "multipart/form-data" 
            },
            data: formData
        })
        
        try{

            const response = await (
                await (await instance.post(UrlService.createCitesApplication(), props))
            )
            
            return response.data
        }
        catch(error){
            console.log(error);
            return false
        }
    }
}

export default new CitesApplicationService();