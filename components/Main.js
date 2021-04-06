import html from "html-literal";
import * as views from "./views";

export default (path) => html`
  ${views["Home"]()}
  ${views["Bio"]()}
  ${views["Gallery"]()}
  ${views["Form"]()}
`;
