import Link from "next/link";

export default function ContentWrapper({
  children,
  header,
}: {
  children: React.ReactNode;
  header: string;
}) {
  return (
    <section className="h-screen bg-white border flex flex-col justify-center items-center text-black gap-8">
      <p className="bold text-xl">Feature: {header}</p>
      <div className="w-2/4 text-center">{children}</div>
      <Link href="/">
        <button className="text-black border p-2 rounded-lg text-sm hover:bg-gray-100">
          Return back
        </button>
      </Link>
    </section>
  );
}
