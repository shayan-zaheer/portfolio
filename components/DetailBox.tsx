function DetailBox({number, text, sign, roundL, roundR, noRound} : {number: number, text: string, sign?: string, roundL?: boolean, roundR?: boolean, noRound?: boolean}) {
  return (
    <span className={`p-10 border ${roundL && "rounded-l-lg"} ${roundR && "rounded-r-lg"} ${noRound && "border-r-0 border-l-0"} border-[#F3D1BF] text-[#391400] space-y-4 w-[25%]`}>
        <p className="text-4xl font-bold">{number}{sign}</p>
        <p>{text}</p>
    </span>
  )
}

export default DetailBox