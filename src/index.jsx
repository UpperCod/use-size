/** @jsx h */
import { h, c, useProp, useHost } from "atomico";
import { useSize } from "@atomico/kit/use-state-size";

function MyCounter() {
  const ref = useHost();
  const [width, height] = useSize(ref);

  return (
    <host
      shadowDom
      style="display:flex;width:100%;font-size:12px;justify-content:space-between"
    >
      [
      <span>
        {width} x {height}
      </span>
      ]
    </host>
  );
}

MyCounter.props = {
  count: {
    type: Number,
    reflect: true,
    value: 0,
  },
};

customElements.define("my-counter", c(MyCounter));
