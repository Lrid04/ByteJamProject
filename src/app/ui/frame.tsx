export default function Frame(props:{timeInput:string}) {
    return (
        <main className='bg-[url("/frame.png")] bg-contain bg-no-repeat h-80 h-[50%] pt-[19%] w-[100%]'>
            <pre className="text-wrap text-right pr-[21%] pl-[19%] mb-[19%] overflow-y-scroll h-[80%]">
                {/* This is a sample text
                <br />
                This is a sample text
                <br />
                This is a sample text
                <br />
                This is a sample text
                <br />
                This is a sample text
                <br />
                This is a sample text
                <br />
                This is a sample text */}
                {props.timeInput}
            </pre>
        </main>
    );
}