theme: {
    extend: {
      spacing: {
        '80\%' // p-80% - doesn't work
      }
    }
  }

export default function Frame() {
    return (
        <main className='bg-[url("/frame.png")] bg-contain bg-no-repeat h-[40%] grow pt-[19%]'>
                <pre className="text-wrap text-right pr-[21%] pl-[19%] mb-[19%] overflow-y-scroll overflow-hidden h-[47%] object-fit: scale-down;">
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
                    This is a sample text
                    <br />
                    This is a sample text

                </pre>
        </main>

    );
}