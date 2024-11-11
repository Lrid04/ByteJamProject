export default function Frame(props:{timeInput:string}) {
    return (
        <main className='bg-[url("/frame.png")] bg-contain bg-no-repeat h-[50%] grow pt-[19%]'>
            <pre className="text-wrap text-right pr-[21%] pl-[19%] mb-[19%] overflow-y-scroll h-[47%]">
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