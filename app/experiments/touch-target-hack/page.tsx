import { Button } from "@/components/ui/button";
import { ArrowLeftIcon, ArrowRightIcon, PlusIcon } from "lucide-react";

export default function TouchTargetHackPage() {
  return (
    <>
      <div>
        <header className="text-center">
          <h1 className="text-4xl font-bold tracking-tight ">
            Touch Target Hack
          </h1>
        </header>
      </div>
      <main className='space-y-8'>
        <div className="w-fit flex gap-4 items-center">
          <Button variant="outline" size="icon"  >
            <ArrowLeftIcon className="size-4" />
          </Button>
          <Button variant="outline" size="icon"  >
            <ArrowRightIcon className="size-4" />
          </Button>
          <Button variant="outline" size="icon"  >
            <PlusIcon className="size-4" />
          </Button>
        </div>
        <div className="w-fit flex gap-4 items-center">
          <Button variant="outline" size="icon-xs" className="pointer-coarse:touch-hitbox active:bg-red-500"  >
            <ArrowLeftIcon className="size-4" />
          </Button>
          <Button variant="outline" size="icon-xs"  >
            <ArrowRightIcon className="size-4" />
          </Button>
          <Button variant="outline" size="icon-xs"  >
            <PlusIcon className="size-4" />
          </Button>
        </div>
      </main>
    </>
  );
}
