interface Props {
    text: string
}

const SubmitButton: React.FC<Props> = ({text}) => {
    return(
        <button
            type="submit"
            className="group w-full flex justify-center p-4 border border-transparent text-sm font-medium rounded-none text-white bg-green-500 hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
        >{text}</button>
    )
}

export default SubmitButton