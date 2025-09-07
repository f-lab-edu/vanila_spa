import { definePage } from "../api.js";
import { Button } from "../components/button.js";

export const TestPage = definePage("home", (router) => {
  const wrapper = document.createElement("div");
  const text = document.createElement("p");
  text.innerText = "하이하이 여기는 테스트 페이지";

  wrapper.appendChild(text);

  const homeBtn = Button({ onClick: () => router.navigate("/") }, "홈");
  wrapper.appendChild(homeBtn);

  return wrapper;
});
