import Image from 'next/image'
import { Inter } from 'next/font/google'
import { useEffect } from 'react'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  useEffect(() => {
    let file = `name,department,salary,office,isManager,skill1,skill2,skill3
    John,CDN,80,Lisbon,FALSE,Caching,C++,AI
    Jill,Developer Platform,100,Austin,FALSE,Typescript,C++,GoLang
    Audrey Leblanc,Accounting,154,Singapore,TRUE,HTML,CSS,Postgres
    Braden McMahon,Bots,219,San Francisco,TRUE,Distributed Systems,Rust,AI
    Belen Norman,Developer Platform,252,London,TRUE,HTML,Rust,GoLang
    Aziel Gibson,CDN,145,New York,TRUE,Caching,C++,AI
    Eden Roy,Accounting,190,Austin,FALSE,Typescript,C++,GoLang
    Marcelo Sullivan,Bots,241,Singapore,FALSE,HTML,CSS,Postgres
    Melanie Esparza,Developer Platform,231,San Francisco,FALSE,Distributed Systems,Rust,AI
    Carl Nava,CDN,230,London,FALSE,HTML,Rust,GoLang
    Scout Hansen,Accounting,259,New York,FALSE,Caching,C++,AI
    Charlie West,Bots,131,Lisbon,FALSE,Typescript,C++,GoLang
    Remi Hendrix,Developer Platform,162,Austin,FALSE,HTML,CSS,Postgres
    Korbyn Cuevas,CDN,86,Singapore,FALSE,Distributed Systems,Rust,AI
    Adele Castillo,Accounting,237,San Francisco,FALSE,HTML,Rust,GoLang
    Kai Rojas,Bots,102,London,FALSE,Caching,C++,AI
    Adaline Murphy,Developer Platform,238,New York,FALSE,Typescript,C++,GoLang
    Cameron Doyle,CDN,81,Lisbon,FALSE,HTML,CSS,Postgres
    Annalise Fuller,Accounting,172,Austin,FALSE,Distributed Systems,Rust,AI
    Andre Spears,Bots,106,Singapore,FALSE,HTML,Performance,GoLang
    Isabela Casey,Developer Platform,283,San Francisco,FALSE,Caching,C++,AI
    Armando Trujillo,CDN,178,London,FALSE,Typescript,CSS,GoLang
    Danielle Adkins,Accounting,89,New York,FALSE,HTML,Rust,Postgres
    Kylo Hayes,Bots,213,London,FALSE,Distributed Systems,Performance,AI
    Iris Frye,Developer Platform,212,New York,FALSE,HTML,C++,GoLang
    Franco Short,CDN,82,Lisbon,FALSE,Caching,CSS,AI
    Cheyenne Fowler,Accounting,150,Austin,FALSE,Typescript,Rust,GoLang
    Kameron Colon,Bots,149,Singapore,FALSE,HTML,Performance,Postgres
    Remy Wang,Developer Platform,94,San Francisco,FALSE,Distributed Systems,C++,AI
    Cohen Dougherty,CDN,157,London,FALSE,HTML,CSS,GoLang
    Alisson Russell,Accounting,214,New York,FALSE,Caching,Rust,AI
    Weston McIntosh,Bots,130,Lisbon,FALSE,Typescript,Performance,GoLang
    Gwen Gutierrez,Developer Platform,259,Austin,FALSE,HTML,C++,Postgres
    Luca Acosta,CDN,175,Singapore,FALSE,Distributed Systems,CSS,AI
    Kaia Wyatt,Accounting,112,San Francisco,FALSE,HTML,Rust,GoLang
    Sam Hubbard,Bots,87,London,FALSE,Caching,Performance,AI
    Rosie Hull,Developer Platform,227,New York,FALSE,Typescript,C++,GoLang
    Salem Foley,CDN,290,London,FALSE,HTML,CSS,Postgres
    Zaylee Blair,Accounting,136,New York,FALSE,Distributed Systems,Rust,AI
    Troy Bartlett,Bots,103,Lisbon,FALSE,HTML,Performance,GoLang
    Aubrielle Collier,Developer Platform,225,Austin,FALSE,Distributed Systems,C++,AI
    Edison Hamilton,CDN,267,Singapore,FALSE,HTML,CSS,GoLang
    Mackenzie Gill,Accounting,101,San Francisco,FALSE,Caching,Rust,Postgres
    Matthias Greene,Bots,288,London,FALSE,Typescript,Performance,AI
    Selena Hutchinson,Developer Platform,263,New York,FALSE,HTML,C++,GoLang
    Korbin Francis,CDN,108,Lisbon,FALSE,Distributed Systems,Rust,AI
    Daniella Noble,Accounting,289,Austin,FALSE,HTML,Performance,GoLang
    Idris Kent,Bots,297,Singapore,FALSE,Caching,C++,Postgres
    Jazmine Holt,Developer Platform,139,San Francisco,FALSE,Typescript,Rust,AI
    Niko Molina,CDN,229,London,FALSE,HTML,Performance,GoLang
    Alexandria Booth,Accounting,156,New York,FALSE,Distributed Systems,C++,AI
    Chaim Cisneros,Bots,80,Austin,FALSE,Distributed Systems,Rust,GoLang
    Janelle Hall,Developer Platform,158,Singapore,FALSE,HTML,Performance,Postgres
    Thomas Nixon,CDN,201,San Francisco,FALSE,Caching,C++,AI
    Deborah Taylor,Accounting,186,London,FALSE,Typescript,Rust,GoLang
    Jackson Parsons,Bots,150,New York,FALSE,HTML,Performance,AI
    Maia Blackburn,Developer Platform,294,Austin,FALSE,Distributed Systems,C++,GoLang
    Zahir Hartman,CDN,106,Singapore,FALSE,HTML,Rust,Postgres
    Kennedi Palacios,Accounting,300,San Francisco,FALSE,Caching,Performance,AI
    Thaddeus Dillon,Bots,172,London,FALSE,Typescript,C++,GoLang
    Laurel Moore,Developer Platform,194,New York,FALSE,HTML,Rust,AI
    Levi Rivers,CDN,141,Austin,FALSE,Distributed Systems,Performance,GoLang
    Kiana Ray,Accounting,104,Austin,FALSE,Distributed Systems,C++,Postgres
    Arlo Person,Bots,203,Singapore,FALSE,HTML,Rust,AI
    Dylan Evans,Developer Platform,90,San Francisco,FALSE,Caching,Performance,GoLang
    Elias Quintero,CDN,215,London,FALSE,Typescript,C++,AI
    Keyla Hurst,Accounting,137,New York,FALSE,HTML,Rust,GoLang
    Neil Carroll,Bots,188,Austin,FALSE,Distributed Systems,Performance,Postgres
    Zara Bradford,Developer Platform,163,Austin,FALSE,HTML,C++,AI
    Ander Quintero,CDN,226,Singapore,FALSE,Caching,Rust,GoLang
    Keyla Bravo,Accounting,242,San Francisco,FALSE,Typescript,Performance,AI
    Genesis Felix,Bots,187,London,FALSE,HTML,C++,GoLang
    Paisleigh Sherman,Developer Platform,118,New York,FALSE,Distributed Systems,Rust,Postgres
    Adan Sanford,CDN,280,Austin,FALSE,Distributed Systems,Performance,AI
    Emerald Macdonald,Accounting,228,Austin,FALSE,HTML,C++,GoLang
    Hugh Bowman,Bots,139,Singapore,FALSE,Caching,Rust,AI
    Fiona Robinson,Developer Platform,300,San Francisco,FALSE,Typescript,Performance,GoLang
    Matthew Christensen,CDN,204,London,FALSE,HTML,C++,Postgres
    Carmen McLaughlin,Accounting,221,New York,FALSE,Distributed Systems,Rust,AI
    Ibrahim Gould,Bots,262,Austin,FALSE,HTML,Performance,GoLang
    Violeta Cortes,Developer Platform,98,Austin,FALSE,Caching,C++,AI
    Banks Fitzpatrick,CDN,250,Singapore,FALSE,Typescript,Rust,GoLang
    Annabella Velasquez,Accounting,172,San Francisco,FALSE,HTML,Performance,Postgres
    Sullivan Nunez,Bots,165,London,FALSE,Distributed Systems,C++,AI
    Mya Hardy,Developer Platform,127,New York,FALSE,Distributed Systems,Rust,GoLang
    Jayceon Murillo,CDN,128,Austin,FALSE,HTML,Performance,AI
    Mikaela Hampton,Accounting,89,Austin,FALSE,Caching,C++,GoLang
    Hank Sandoval,Bots,165,Singapore,FALSE,Typescript,Rust,Postgres
    Elsie McCarthy,Developer Platform,128,San Francisco,FALSE,HTML,Rust,AI
    Devin Weber,CDN,285,London,FALSE,Distributed Systems,Performance,GoLang`

    fetch('/api/organization-chart', {
      method: "POST",
      body: JSON.stringify({ "organizationData": file })
    }).then(res => res.json()).then(data => console.log(data)).catch(err => console.error(err));

    fetch('/api/organization-chart').then(res => res.json())
      .then(data => console.log(data)).catch(err => console.log(err));

    // fetch('/api/me').then(res => res.json()).then(data => console.log(data)).catch(err => console.log(err))
  }, [])
  
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
    >
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
          Get started by editing&nbsp;
          <code className="font-mono font-bold">pages/index.js</code>
        </p>
        <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none">
          <a
            className="pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0"
            href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            By{' '}
            <Image
              src="/vercel.svg"
              alt="Vercel Logo"
              className="dark:invert"
              width={100}
              height={24}
              priority
            />
          </a>
        </div>
      </div>

      <div className="relative flex place-items-center before:absolute before:h-[300px] before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700/10 after:dark:from-sky-900 after:dark:via-[#0141ff]/40 before:lg:h-[360px]">
        <Image
          className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
          src="/next.svg"
          alt="Next.js Logo"
          width={180}
          height={37}
          priority
        />
      </div>

      <div className="mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left">
        <a
          href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=default-template-tw&utm_campaign=create-next-app"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Docs{' '}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Find in-depth information about Next.js features and API.
          </p>
        </a>

        <a
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=default-template-tw&utm_campaign=create-next-app"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Learn{' '}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Learn about Next.js in an interactive course with&nbsp;quizzes!
          </p>
        </a>

        <a
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=default-template-tw&utm_campaign=create-next-app"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Templates{' '}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Discover and deploy boilerplate example Next.js&nbsp;projects.
          </p>
        </a>

        <a
          href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template-tw&utm_campaign=create-next-app"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Deploy{' '}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Instantly deploy your Next.js site to a shareable URL with Vercel.
          </p>
        </a>
      </div>
    </main>
  )
}
