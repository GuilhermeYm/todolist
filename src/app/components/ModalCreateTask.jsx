import { useSearchParams } from "next/navigation"
import { useEffect } from "react"
import FormCreateTask from "./FormCreateTask"
import FormCreateTaskChat from "./FormCreateTaskChat"

export default function ModalCreateTask() { 
    const searchParams = useSearchParams() 
    const show = searchParams.get("showCreateTask")
    if ( show === "true") {
       
    }
    return show === "true" ? <FormCreateTask /> : null
}