import { Button } from "@/components/ui/button";
import { ArrowLeftIcon, ArrowRightIcon, PlusIcon } from "lucide-react";

export default function TouchTargetHackPage() {
  return (
    <article>
      <div>
        <header className="mb-12 text-center">
          <h1>
            Touch Target Hack
          </h1>
        </header>
      </div>
      <main className="space-y-24">
        <section className="space-y-8">
          <h2 >
            No{" "}
            <code>
              touch-hitbox
            </code>{" "}
            class
          </h2>
          <p>Hover over each of these buttons, notice anything?</p>
          <div className="mx-auto flex py-16 items-center gap-12 bg-card border rounded justify-center *:scale-200 *:active:scale-194">
            <Button variant="outline" size="icon-xs">
              <ArrowLeftIcon className="size-3" />
            </Button>
            <Button variant="outline" size="icon-xs">
              <ArrowRightIcon className="size-3" />
            </Button>
            <Button variant="outline" size="icon-xs">
              <PlusIcon className="size-3" />
            </Button>
          </div>
          <p>You shouldn't, these are regular buttons with a standard touch target.</p>
        </section>
        <section className="space-y-8">
          <h2 >
            <em>With</em>{" "}
            <code>
              touch-hitbox
            </code>{" "}
            class
          </h2>
          <p>Next, hover over each of these buttons below; which one is different? <em>What</em> is different?</p>
          <div className="mx-auto flex py-16 items-center gap-12 bg-card border rounded justify-center *:scale-200 *:active:scale-194 ">
            <Button variant="outline" size="icon-xs" className="touch-hitbox">
              <ArrowLeftIcon className="size-3" />
            </Button>
            <Button variant="outline" size="icon-xs" className="">
              <ArrowRightIcon className="size-3" />
            </Button>
            <Button variant="outline" size="icon-xs" className="">
              <PlusIcon className="size-3" />
            </Button>
          </div>
          <p>One of these buttons has a class of <code>touch-hitbox</code> which makes it's touch target larger than the other buttons. If you didn't notice, hover on the <em>outside</em> of each button and you should see what I'm talking about.What is this class doing that allows that and why should we care?</p>
          <p>Not clear enough? Here's a demo:</p>
          <div className="mx-auto flex py-16 items-center gap-12 bg-card border rounded justify-center *:scale-200 *:active:scale-194">
            <Button variant="outline" size="icon-xs" className="touch-hitbox-demo">
              <ArrowLeftIcon className="size-3" />
            </Button>
            <Button variant="outline" size="icon-xs" className="">
              <ArrowRightIcon className="size-3" />
            </Button>
            <Button variant="outline" size="icon-xs" className="">
              <PlusIcon className="size-3" />
            </Button>
          </div>
          <p>See the red border? That's the touch target. The button is the same size as the other buttons, but the touch target is larger. What is this class doing that allows that and why should we care?</p>
          <h3 >What is <code>touch-hitbox</code> doing?</h3>
          <p>The <code>touch-hitbox</code> utility class creates a 44x44px invisible button <em>behind</em> the button you see. This <code>::before</code> pseudo-element cannot be clicked, but an invisible overlay can. This meets WCAG touch target size requirements without changing button appearance.</p>
          <p>This is incredibly useful on mobile devices where your buttons may not be large enough to meet those standards, and you don't want to ruin your design or layout.</p>
        <pre className="bg-secondary p-4 rounded whitespace-pre-wrap text-sm">
          <code>
          {`@utility touch-hitbox {
  position: relative;

  &::before {
    content: "";
    position: absolute;
    display: block;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 44px;
    height: 44px;
    pointer-events: auto;
    background-color: transparent;
    z-index: 9999;
  }
}`}</code>
</pre>
        </section>
      </main>
    </article>
  );
}
