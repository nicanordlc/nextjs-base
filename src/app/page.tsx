import Image from "next/image";

export default function Home() {
  return (
    <main
      className={`
        row-start-2 flex flex-col items-center gap-8

        font-[family-name:var(--font-geist-mono)]

        sm:items-start
      `}
    >
      <Image
        className="dark:invert"
        src="https://nextjs.org/icons/next.svg"
        alt="Next.js logo"
        width={0}
        height={0}
        style={{ width: 180, height: 38 }}
        priority
      />

      <ol
        className={`
          list-inside list-decimal text-center text-sm

          sm:text-left
        `}
      >
        <li className="mb-2">
          Get started by editing{" "}
          <code
            className={`
              rounded bg-black/[.05] px-1 py-0.5 font-semibold

              dark:bg-white/[.06]
            `}
          >
            src/app/page.tsx
          </code>
          .
        </li>
        <li>Save and see your changes instantly.</li>
      </ol>

      <div
        className={`
          flex flex-col items-center gap-4

          sm:flex-row
        `}
      >
        <a
          className={`
            flex h-10 items-center justify-center gap-2 rounded-full border
            border-solid border-transparent bg-foreground px-4 text-sm
            text-background transition-colors

            dark:hover:bg-[#ccc]

            hover:bg-[#383838]

            sm:h-12 sm:px-5 sm:text-base
          `}
          href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            className="dark:invert"
            src="https://nextjs.org/icons/vercel.svg"
            alt="Vercel logomark"
            width={0}
            height={0}
            style={{ width: 20, height: 20 }}
          />
          Deploy now
        </a>
        <a
          className={`
            flex h-10 items-center justify-center rounded-full border
            border-solid border-black/[.08] px-4 text-sm transition-colors

            dark:border-white/[.145] dark:hover:bg-[#1a1a1a]

            hover:border-transparent hover:bg-[#f2f2f2]

            sm:h-12 sm:min-w-44 sm:px-5 sm:text-base
          `}
          href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Read our docs
        </a>
      </div>
    </main>
  );
}
