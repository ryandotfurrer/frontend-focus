import Link from "next/link";

export default function ExperimentsPage() {
  return (
    <>
      <div>
        <header className="text-center">
          <h1 className="text-4xl font-bold tracking-tight ">Experiments</h1>
        </header>
      </div>
      <main>
        <Link href="/experiments/touch-target-hack">Touch Target Hack</Link>
      </main>
    </>
  );
}
