import "clsx";
import { e as ensure_array_like, d as bind_props } from "../../chunks/index.js";
import { e as escape_html } from "../../chunks/escaping.js";
function listItems($$payload, items) {
  const each_array = ensure_array_like(items);
  $$payload.out += `<!--[-->`;
  for (let index = 0, $$length = each_array.length; index < $$length; index++) {
    let item = each_array[index];
    $$payload.out += `<!---->${escape_html(item)}`;
  }
  $$payload.out += `<!--]-->`;
}
function List($$payload, $$props) {
  let { items = [] } = $$props;
  $$payload.out += `<ul>`;
  listItems($$payload, items);
  $$payload.out += `<!----></ul>`;
  bind_props($$props, { items });
}
function _page($$payload) {
  let items = ["Item 1", "Item 2", "Item 3"];
  List($$payload, { items });
}
export {
  _page as default
};
