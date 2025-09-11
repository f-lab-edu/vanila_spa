import { definePage } from "../api.js";
import { Button } from "../components/button.js";

export const HomePage = definePage("home", (router) => {
  const wrapper = document.createElement("div");
  const text = document.createElement("p");
  text.innerText = "하이하이 여기는 홈 페이지";

  wrapper.appendChild(text);

  const homeBtn = Button({ onClick: () => router.navigate("/test") }, "Test");
  wrapper.appendChild(homeBtn);

  return wrapper;
});
