export default function Remote(props:{setValue: CallableFunction, remoteValue: string, handleFetchMovie: CallableFunction}) {
    
    const handleButtonClick = (value: string) => {
        if (value === "<-") {
            props.setValue(props.remoteValue.slice(0, -1)); // Backspace functionality
            return;
        }
        if (props.remoteValue.length + 1 == 5) {
            return; // Limit input length to 5 characters
        }
        props.setValue(props.remoteValue + value);
    };
 
    return (
        <div className="bg-[url('/remote.png')] bg-contain bg-no-repeat flex flex-col items-center p-5 mb-15 text-center pr-[10%] mb-[5%]">
            <div className="px-[8%] py-[8%]">
                <h1 className="text-xl font-bold mt-2 mb-4">Time Travel Remote</h1>

                {/* Input Display Box with "Enter Year" */}
                <div className="border border-gray-300 p-3 rounded-md mb-4 bg-gray-100 w-[90%] ml-[12%] mb-[38%] text-center text-gray-900">
                    <span className="text-2xl font-semibold">{props.remoteValue || "Enter Year"}</span>
                </div>
        
                {/* Keypad Container */}
                <div className="flex flex-col w-full mb-[5%] ml-[8%]">
                    <div className="flex justify-between mb-2">
                        <button onClick={() => handleButtonClick('1')} className="flex-1 mx-1 p-3 bg-blue-500 text-white rounded hover:bg-blue-700">1</button>
                        <button onClick={() => handleButtonClick('2')} className="flex-1 mx-1 p-3 bg-blue-500 text-white rounded hover:bg-blue-700">2</button>
                        <button onClick={() => handleButtonClick('3')} className="flex-1 mx-1 p-3 bg-blue-500 text-white rounded hover:bg-blue-700">3</button>
                    </div>
                    <div className="flex justify-between mb-2">
                        <button onClick={() => handleButtonClick('4')} className="flex-1 mx-1 p-3 bg-blue-500 text-white rounded hover:bg-blue-700">4</button>
                        <button onClick={() => handleButtonClick('5')} className="flex-1 mx-1 p-3 bg-blue-500 text-white rounded hover:bg-blue-700">5</button>
                        <button onClick={() => handleButtonClick('6')} className="flex-1 mx-1 p-3 bg-blue-500 text-white rounded hover:bg-blue-700">6</button>
                    </div>
                    <div className="flex justify-between mb-2">
                        <button onClick={() => handleButtonClick('7')} className="flex-1 mx-1 p-3 bg-blue-500 text-white rounded hover:bg-blue-700">7</button>
                        <button onClick={() => handleButtonClick('8')} className="flex-1 mx-1 p-3 bg-blue-500 text-white rounded hover:bg-blue-700">8</button>
                        <button onClick={() => handleButtonClick('9')} className="flex-1 mx-1 p-3 bg-blue-500 text-white rounded hover:bg-blue-700">9</button>
                    </div>
                    <div className="flex justify-between">
                        <button className="flex-1 mx-1 p-3 bg-blue-500 text-white rounded hover:bg-blue-700"></button>
                        <button onClick={() => handleButtonClick('0')} className="flex-1 mx-1 p-3 bg-blue-500 text-white rounded hover:bg-blue-700">0</button>
                        <button onClick={() => handleButtonClick('<-')} className="flex-1 mx-1 p-3 bg-blue-500 text-white rounded hover:bg-blue-700">{'<-'}</button>
                    </div>
                </div>

                {/* Small functional "Get Top Movie" button */}
                <button
                    onClick={() =>props.handleFetchMovie(props.remoteValue)}
                    className="p-2 ml-5 bg-green-500 text-white rounded hover:bg-green-700"
                >
                    Get Top Movie
                </button>
            </div>
        </div>
    );
}