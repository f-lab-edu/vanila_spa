import { ButtonComponent } from "../api.js";

export const Button: ButtonComponent = (props, children) => {
  const button = document.createElement("button");

  if (props.onClick) {
    button.onclick = props.onClick;
  }

  if (typeof children === "string") {
    button.innerText = children;
  } else if (children instanceof Element) {
    button.appendChild(children);
  } else if (Array.isArray(children)) {
    children.forEach((child) => button.appendChild(child));
  }

  return button;
};
