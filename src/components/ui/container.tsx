export default function Container(children: React.ReactNode){
    return (
        <div className="container mx-auto">
            { children }
        </div>
    )
}