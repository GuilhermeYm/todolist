import { useSearchParams } from "next/navigation"
import FormCreateTask from "./FormCreateTask"

export default function ModalCreateTask() { 
    const searchParams = useSearchParams() 
    const show = searchParams.get("showCreateTask")
    if ( show === "true") {
       
    }
    return show === "true" ? <FormCreateTask /> : null
}