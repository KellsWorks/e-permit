import Oval from "react-loading-icons/dist/components/oval"


interface Props {
    text: string,
    onLoad: boolean
}

const SubmitButton: React.FC<Props> = ({text, onLoad}) => {
    return(
        <button
            type="submit"
            className="group w-full flex justify-center p-4 border border-transparent text-sm font-medium rounded-none text-white bg-green-400 hover:bg-green-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
        > {onLoad  ? <Oval className="w-5 h-5"/> : text}</button>
    )
}

export default SubmitButton