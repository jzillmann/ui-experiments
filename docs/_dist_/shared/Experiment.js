import './Experiment.css.proxy.js';
/* src/shared/Experiment.svelte generated by Svelte v3.29.7 */
import {
	SvelteComponent,
	add_render_callback,
	append,
	assign,
	attr,
	binding_callbacks,
	check_outros,
	create_bidirectional_transition,
	create_component,
	create_slot,
	destroy_component,
	detach,
	element,
	get_spread_object,
	get_spread_update,
	group_outros,
	init,
	insert,
	listen,
	mount_component,
	safe_not_equal,
	set_data,
	space,
	text,
	toggle_class,
	transition_in,
	transition_out,
	update_slot
} from "../../modules/svelte/internal.js";

import { blur } from "../../modules/svelte/transition.js";
import SvgIcon from "../svg/SvgIcon.js";
import { clipboard } from "../svg/svgs.js";
const get_content_slot_changes = dirty => ({});
const get_content_slot_context = ctx => ({});
const get_description_slot_changes = dirty => ({});
const get_description_slot_context = ctx => ({});

// (19:0) {#if openDescription}
function create_if_block(ctx) {
	let div;
	let div_transition;
	let current;
	const description_slot_template = /*#slots*/ ctx[5].description;
	const description_slot = create_slot(description_slot_template, ctx, /*$$scope*/ ctx[4], get_description_slot_context);

	return {
		c() {
			div = element("div");
			if (description_slot) description_slot.c();
			attr(div, "class", "text-center mb-6");
		},
		m(target, anchor) {
			insert(target, div, anchor);

			if (description_slot) {
				description_slot.m(div, null);
			}

			current = true;
		},
		p(ctx, dirty) {
			if (description_slot) {
				if (description_slot.p && dirty & /*$$scope*/ 16) {
					update_slot(description_slot, description_slot_template, ctx, /*$$scope*/ ctx[4], dirty, get_description_slot_changes, get_description_slot_context);
				}
			}
		},
		i(local) {
			if (current) return;
			transition_in(description_slot, local);

			add_render_callback(() => {
				if (!div_transition) div_transition = create_bidirectional_transition(div, blur, { duration: 180 }, true);
				div_transition.run(1);
			});

			current = true;
		},
		o(local) {
			transition_out(description_slot, local);
			if (!div_transition) div_transition = create_bidirectional_transition(div, blur, { duration: 180 }, false);
			div_transition.run(0);
			current = false;
		},
		d(detaching) {
			if (detaching) detach(div);
			if (description_slot) description_slot.d(detaching);
			if (detaching && div_transition) div_transition.end();
		}
	};
}

function create_fragment(ctx) {
	let div1;
	let div0;
	let t0;
	let t1;
	let span;
	let svgicon;
	let t2;
	let t3;
	let current;
	let mounted;
	let dispose;
	const svgicon_spread_levels = [clipboard];
	let svgicon_props = {};

	for (let i = 0; i < svgicon_spread_levels.length; i += 1) {
		svgicon_props = assign(svgicon_props, svgicon_spread_levels[i]);
	}

	svgicon = new SvgIcon({ props: svgicon_props });
	let if_block = /*openDescription*/ ctx[1] && create_if_block(ctx);
	const content_slot_template = /*#slots*/ ctx[5].content;
	const content_slot = create_slot(content_slot_template, ctx, /*$$scope*/ ctx[4], get_content_slot_context);

	return {
		c() {
			div1 = element("div");
			div0 = element("div");
			t0 = text(/*title*/ ctx[0]);
			t1 = space();
			span = element("span");
			create_component(svgicon.$$.fragment);
			t2 = space();
			if (if_block) if_block.c();
			t3 = space();
			if (content_slot) content_slot.c();
			attr(div0, "class", "text-2xl font-bold");
			attr(span, "class", "ml-1 cursor-pointer svelte-1l1moei");
			toggle_class(span, "openDescription", /*openDescription*/ ctx[1]);
			attr(div1, "class", "flex items-center justify-center");
		},
		m(target, anchor) {
			insert(target, div1, anchor);
			append(div1, div0);
			append(div0, t0);
			append(div1, t1);
			append(div1, span);
			mount_component(svgicon, span, null);
			/*span_binding*/ ctx[6](span);
			insert(target, t2, anchor);
			if (if_block) if_block.m(target, anchor);
			insert(target, t3, anchor);

			if (content_slot) {
				content_slot.m(target, anchor);
			}

			current = true;

			if (!mounted) {
				dispose = listen(span, "click", /*toogleOpen*/ ctx[3]);
				mounted = true;
			}
		},
		p(ctx, [dirty]) {
			if (!current || dirty & /*title*/ 1) set_data(t0, /*title*/ ctx[0]);

			const svgicon_changes = (dirty & /*clipboard*/ 0)
			? get_spread_update(svgicon_spread_levels, [get_spread_object(clipboard)])
			: {};

			svgicon.$set(svgicon_changes);

			if (dirty & /*openDescription*/ 2) {
				toggle_class(span, "openDescription", /*openDescription*/ ctx[1]);
			}

			if (/*openDescription*/ ctx[1]) {
				if (if_block) {
					if_block.p(ctx, dirty);

					if (dirty & /*openDescription*/ 2) {
						transition_in(if_block, 1);
					}
				} else {
					if_block = create_if_block(ctx);
					if_block.c();
					transition_in(if_block, 1);
					if_block.m(t3.parentNode, t3);
				}
			} else if (if_block) {
				group_outros();

				transition_out(if_block, 1, 1, () => {
					if_block = null;
				});

				check_outros();
			}

			if (content_slot) {
				if (content_slot.p && dirty & /*$$scope*/ 16) {
					update_slot(content_slot, content_slot_template, ctx, /*$$scope*/ ctx[4], dirty, get_content_slot_changes, get_content_slot_context);
				}
			}
		},
		i(local) {
			if (current) return;
			transition_in(svgicon.$$.fragment, local);
			transition_in(if_block);
			transition_in(content_slot, local);
			current = true;
		},
		o(local) {
			transition_out(svgicon.$$.fragment, local);
			transition_out(if_block);
			transition_out(content_slot, local);
			current = false;
		},
		d(detaching) {
			if (detaching) detach(div1);
			destroy_component(svgicon);
			/*span_binding*/ ctx[6](null);
			if (detaching) detach(t2);
			if (if_block) if_block.d(detaching);
			if (detaching) detach(t3);
			if (content_slot) content_slot.d(detaching);
			mounted = false;
			dispose();
		}
	};
}

function instance($$self, $$props, $$invalidate) {
	let { $$slots: slots = {}, $$scope } = $$props;
	let { title } = $$props;
	let openDescription = false;
	let openDesciptionElement;

	function toogleOpen() {
		$$invalidate(1, openDescription = !openDescription);
	}

	function span_binding($$value) {
		binding_callbacks[$$value ? "unshift" : "push"](() => {
			openDesciptionElement = $$value;
			$$invalidate(2, openDesciptionElement);
		});
	}

	$$self.$$set = $$props => {
		if ("title" in $$props) $$invalidate(0, title = $$props.title);
		if ("$$scope" in $$props) $$invalidate(4, $$scope = $$props.$$scope);
	};

	return [
		title,
		openDescription,
		openDesciptionElement,
		toogleOpen,
		$$scope,
		slots,
		span_binding
	];
}

class Experiment extends SvelteComponent {
	constructor(options) {
		super();
		init(this, options, instance, create_fragment, safe_not_equal, { title: 0 });
	}
}

export default Experiment;