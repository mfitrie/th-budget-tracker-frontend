import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"

type PropsAlertCustom = {
    title: string,
    message: string,
}

export default function AlertCustom({ title, message }: PropsAlertCustom){
    return (
        <Alert style={{
            position: "absolute"
        }}>
            <AlertTitle>{ title }</AlertTitle>
            <AlertDescription>{ message }</AlertDescription>
        </Alert> 
    )
}