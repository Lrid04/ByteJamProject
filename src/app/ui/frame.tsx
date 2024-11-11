export default function Frame(props:{timeInput: string}) {
    return (
        <main className='bg-[url("/frame.png")] bg-contain bg-no-repeat h-screen min-w-[20%] self-start pt-[4%] pb-[7%]'>
                <p className="pl-[20%]">Years Travels to</p>
                <pre className="text-wrap overflow-y-auto overflow-hidden pl-[65%] pt-[20%] h-[42%]">
                  {props.timeInput}
                </pre>
        </main>

    );
}