import Image from 'next/image'

export default function Home() {
    return (
      <div className="grid grid-cols-6 gap-5 bg-green-300  " >
        <div className="col-span-2 flex justify-center bg-blue-300" >
          <Image src="/wheelie1.svg" alt="ENY logo" width={50} height={50} />
          <h1 className="font-bold text-3xl text-center bg-red-600" >En y Token</h1>
        </div>

        <div className="col-span-4 flex justify-around bg-yellow-300 " style={{float: 'right'}}>
          <p  >Home</p>
          <p>About</p>
          <p>Roadmap</p>
          <p>News</p>
          <p>Whitepaper</p>
          <Image src="/discord.svg" alt="ENY logo" width={40} height={40} />
          <Image src="/telegram.svg" alt="ENY logo" width={40} height={40} />
          <Image src="/twitter.svg" alt="ENY logo" width={40} height={40} />
        </div>

      </div>
      
    )
  }