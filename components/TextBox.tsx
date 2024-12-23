function TextBox({number, text} : {number: number, text: string}) {
    return (
        <div className="flex space-x-6 py-4 items-center">
            <h1 className="max-md:text-5xl md:text-6xl text-[#391400] font-bold">
                {number}
            </h1>
            <p className="text-[#391400] line-clamp-2 text-lg font-bold">
                {text}
            </p>
        </div>
    );
}

export default TextBox;
