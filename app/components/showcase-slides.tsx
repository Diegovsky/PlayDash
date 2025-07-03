import React, {
	useCallback,
	useEffect,
	useState,
	type ComponentProps,
	type ComponentPropsWithoutRef,
	type ComponentPropsWithRef,
	type ReactElement,
} from "react";
import { Button } from "~/components/ui/button";
import useEmblaCarousel from "embla-carousel-react";
import { cn, range } from "~/lib/utils";
import {
	ChevronRight as ArrowRight,
	ChevronLeft as ArrowLeft,
	Dot,
} from "lucide-react";
import type { CarouselApi } from "./ui/carousel";

type ShowcaseState = {
	emblaApi: ReturnType<typeof useEmblaCarousel>[1];
	hasNext: boolean;
	hasPrev: boolean;
	setPosition: (pos: number) => void;
	next: () => void;
	prev: () => void;
	dots: {
		count: number;
		selected: number;
	};
};

const ShowcaseContext = React.createContext<ShowcaseState | null>(null);

function useShowcase(): ShowcaseState {
	const context = React.useContext(ShowcaseContext);

	if (!context) {
		throw new Error("useCarousel must be used within a <Carousel />");
	}

	return context;
}

function Btn({
	variant,
	...props
}: {
	variant: "left" | "right";
	children: string;
}): ReactElement {
	const isRight = variant === "right";
	const showcase = useShowcase();
	const [action, can] = isRight
		? [showcase.next, showcase.hasNext]
		: [showcase.prev, showcase.hasPrev];
	const Arrow = isRight ? ArrowRight : ArrowLeft;
	const arrowClass = cn("p-0 m-auto", isRight ? "ml-auto" : "");
	const extra = isRight ? "justify-self-end" : "";
	const classes = cn(
		`
			max-md:hidden
			cursor-pointer
			mx-1
		  rounded-full
			disabled:pointer-events-none disabled:opacity-50
			bg-zinc-50 self-center size-10
			hover:scale-110
			transition-filter duration-150
	`,
		extra,
	);

	return (
		<button
			disabled={!can}
			data-slot="carousel-next"
			className={classes}
			onClick={action}
			{...props}
		>
			<Arrow className={arrowClass} />
		</button>
	);
}

export function Showcase({
	children,
	className,
	...props
}: ComponentPropsWithRef<"div">): ReactElement {
	const [emblaRef, api] = useEmblaCarousel({});
	const [hasNext, setHasNext] = useState(false);
	const [hasPrev, setHasPrev] = useState(false);
	const [dots, setDots] = useState({
		count: 1,
		selected: 0,
	});

	const onChange = useCallback((api: CarouselApi) => {
		if (!api) return;

		setDots({
			count: api.scrollSnapList().length,
			selected: api.selectedScrollSnap(),
		});
		setHasNext(api.canScrollNext());
		setHasPrev(api.canScrollPrev());
	}, []);

	useEffect(() => {
		if (!api) return;
		onChange(api);
		api.on("reInit", onChange);
		api.on("select", onChange);
		return () => {
			api?.off("select", onChange);
		};
	}, [api, onChange]);

	const context: ShowcaseState = {
		emblaApi: api,
		hasNext: hasNext,
		hasPrev: hasPrev,
		dots: dots,

		setPosition: useCallback(
			(pos: number) => {
				api?.scrollTo(pos);
			},
			[api],
		),

		prev: useCallback(() => {
			api?.scrollPrev();
		}, [api]),

		next: useCallback(() => {
			api?.scrollNext();
		}, [api]),
	};

	return (
		<ShowcaseContext.Provider value={context}>
			<div className="flex flex-col items-center gap-2">
				<div className={cn("stack ", className)} {...props}>
					<div className="overflow-hidden -z-10" ref={emblaRef}>
						<div className="flex">{children}</div>
					</div>
					<Btn variant="left">Prev</Btn>
					<Btn variant="right">Next</Btn>
					<div className="duration-100 mb-1 bg-sky-100 self-end justify-self-center flex rounded-full">
						{range(dots.count).map((i: number) => (
							<Indicator key={i} i={i} />
						))}
					</div>
				</div>
			</div>
		</ShowcaseContext.Provider>
	);
}

const slideStyle = { flex: "0 0 100%", "min-width": 0 };
function Indicator({ i }: { i: number }): ReactElement {
	const { dots, setPosition } = useShowcase();
	const selected = dots.selected === i;
	const classes = cn(
		"transition-colors -m-1 duration-300",
		selected ? "text-slate-950" : "text-slate-300",
	);
	return (
		<button type="button" onClick={() => setPosition(i)}>
			<Dot size={36} className={classes} />
		</button>
	);
}

export function Slide(props: ComponentPropsWithoutRef<"div">): ReactElement {
	return <div style={slideStyle} {...props} />;
}
