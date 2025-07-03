import type {
	ComponentProps,
	ComponentPropsWithRef,
	ReactElement,
} from "react";

export function Title(props: ComponentPropsWithRef<"h1">): ReactElement {
	return <h1 className="text-3xl font-bold" {...props}></h1>;
}
