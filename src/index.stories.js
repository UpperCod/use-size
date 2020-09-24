import "./index.js";
import { html } from "lit-html";

export default {
  parameters: {
    layout: "centered",
  },
};

export const story1 = () => html`
  <div style="text-align:center">
    This Hook allows knowing the size of the webcomponent when it is created or
    redeemed,
    <strong
      ><br />It is mandatory that the element that applies this hook has a
      percentage dimension to container</strong
    >
    <br />
    <br />
    <div style="display:flex;width:100%">
      <div style="width:25%">
        <my-counter></my-counter>
      </div>
      <div style="width:50%">
        <my-counter></my-counter>
      </div>
      <div style="width:25%">
        <my-counter></my-counter>
      </div>
    </div>
  </div>
`;
