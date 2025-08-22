
function Item(props: any) {
    return <div className="px-2 py-4 border-b border-gray-50 last:border-none">
        <h1 className="font-semibold text-lg ">{props.title}</h1>
        <h3 className="text-blue-200 font-medium">{props.company}</h3>
        <p className="text-gray-400 ">{props.duration}</p>
        <p className="text-gray-400 mt-2">{props.description}</p>

    </div>
}

export function CommonContainer(props: any) {

    return <div className={`w-2xl h-fit p-4 border border-gray-50 bg-gray-25 flex flex-col rounded-2xl ${props.style}`} >

        <h1 className="font-bold text-2xl">
            {props.heading}
        </h1>

        <div className="flex flex-col">

            {props.information.map((info: any, index: any) => <Item key={index} title={info.title} company={info.company} duration={info.duration} description={info.description} />)}
        </div>

    </div>

}