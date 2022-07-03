import {generateUniqueID} from "web-vitals/dist/modules/lib/generateUniqueID.js";

function SeatSelector() {
    let seating = [];

    for (let j = 1; j <= 26; j++) {
        if (j === 8 || j === 18)
            seating.push(<div key={generateUniqueID()} className="w-4"></div>)
        else {
            seating.push(
                <div key={generateUniqueID()}
                     className="w-8 border-2 border-gray-400 rounded text-center my-1 px-1">{j}</div>
            )
        }
    }

    return (
        <>
            <div
                className="text-white flex flex-col justify-evenly items-center my-3">
                <div className="text-xl m-6 self-end">
                    <button className="border-2 border-red-800 rounded-3xl w-32 p-2">
                        <a href="checkout">Proceed</a>
                    </button>
                </div>
                <div className={'flex flex-col justify-center items-center overflow-x-scroll md:overflow-x-hidden'}>
                    <div className="font-mono w-[70rem] mb-56 flex flex-col justify-items-start items-center">
                        <div className="w-full flex flex-row justify-evenly items-center">
                            <p>A</p>
                            {seating}
                            <p>A</p>
                        </div>
                        <div className="w-full flex flex-row justify-evenly items-center">
                            <p>B</p>
                            {seating}
                            <p>B</p>
                        </div>
                        <div className="h-6"></div>
                        <div className="w-full flex flex-row justify-evenly items-center">
                            <p>C</p>
                            {seating}
                            <p>C</p>
                        </div>
                        <div className="w-full flex flex-row justify-evenly items-center">
                            <p>D</p>
                            {seating}
                            <p>D</p>
                        </div>
                        <div className="w-full flex flex-row justify-evenly items-center">
                            <p>E</p>
                            {seating}
                            <p>E</p>
                        </div>
                        <div className="w-full flex flex-row justify-evenly items-center">
                            <p>F</p>
                            {seating}
                            <p>F</p>
                        </div>
                        <div className="h-6"></div>
                        <div className="w-full flex flex-row justify-evenly items-center">
                            <p>G</p>
                            {seating}
                            <p>G</p>
                        </div>
                        <div className="w-full flex flex-row justify-evenly items-center">
                            <p>H</p>
                            {seating}
                            <p>H</p>
                        </div>
                        <div className="w-full flex flex-row justify-evenly items-center">
                            <p>I</p>
                            {seating}
                            <p>I</p>
                        </div>
                        <div className="w-full flex flex-row justify-evenly items-center">
                            <p>J</p>
                            {seating}
                            <p>J</p>
                        </div>
                        <div className="w-full flex flex-row justify-evenly items-center">
                            <p>K</p>
                            {seating}
                            <p>K</p>
                        </div>
                        <div className="w-full flex flex-row justify-evenly items-center">
                            <p>L</p>
                            {seating}
                            <p>L</p>
                        </div>
                        <div className="w-full flex flex-row justify-evenly items-center">
                            <p>M</p>
                            {seating}
                            <p>M</p>
                        </div>
                        <div className="w-full flex flex-row justify-evenly items-center">
                            <p>N</p>
                            {seating}
                            <p>N</p>
                        </div>

                    </div>
                    <div
                        className="w-[60rem] h-4 rounded border-b-[6rem] border-b-red-800 border-l-[6rem] border-l-transparent border-r-[6rem] border-r-transparent">
                    </div>
                </div>
            </div>
        </>
    )
}

export default SeatSelector;