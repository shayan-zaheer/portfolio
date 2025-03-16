interface Detail {
    number: number;
    text: string;
    sign?: string;
    roundL?: boolean;
    roundR?: boolean;
    noRound?: boolean;
}

function DetailBox({ number, text, sign, roundL, roundR, noRound }: Detail) {
    return (
        <span
            className={`p-10 border ${
                roundL && "md:rounded-l-lg max-md:rounded-t-lg"
            } ${roundR && "md:rounded-r-lg max-md:rounded-b-lg"} ${
                noRound &&
                "md:border-r-0 md:border-l-0 max-md:border-t-0 max-md:border-b-0"
            } border-[#F3D1BF] text-[#391400] space-y-4 min-w-[25%]`}
        >
            <p className="text-4xl font-bold">
                {number}
                {sign}
            </p>
            <p>{text}</p>
        </span>
    );
}

export default DetailBox;
