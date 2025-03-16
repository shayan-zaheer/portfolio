function TextBox({number, text, extra} : {number: number, text: string, extra?: boolean}) {
    return (
        <div className="flex space-x-8 py-4 items-center">
            <h1 className={`max-md:text-5xl md:text-6xl text-[#391400] font-bold ${extra && "mr-2"}`}>
                {number}
            </h1>
            <p className="text-[#391400] text-lg font-bold">
                {text}
            </p>
        </div>
    );
}

export default TextBox;
