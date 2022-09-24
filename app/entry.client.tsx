import { RemixBrowser } from "@remix-run/react";
import { hydrate } from "preact";

start();

function start() {
  const documentElement = document.documentElement;
  const apply = (n: HTMLElement) => document.replaceChild(n, documentElement);
  // Temp fix
  hydrate(<RemixBrowser />, {
    childNodes: [documentElement],
    firstChild: documentElement,
    insertBefore: apply,
    appendChild: apply,
  } as any);
}
