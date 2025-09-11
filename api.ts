import { Router } from "./index.js";

type RenderResult = Element;

export type Page = (router: Router) => RenderResult;

export type Component<T> = (
  props: {
    onClick?: () => void;
  },
  children: Element | Element[] | string
) => T;

export type ButtonComponent = Component<HTMLButtonElement>;

export function definePage(
  name: string,
  render: (router: Router) => RenderResult
): Page {
  return function (router) {
    return render(router);
  };
}
