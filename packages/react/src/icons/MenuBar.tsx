import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
export const MenuBar = React.memo(React.forwardRef((props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" width="1em" height="1em" strokeLinecap="round" strokeLinejoin="round" shapeRendering="geometricPrecision" ref={ref} {...props}><path fill="#141313" d="M21 6a1 1 0 1 1 0 2H3a1 1 0 0 1 0-2zm0 5a1 1 0 1 1 0 2H3a1 1 0 1 1 0-2zm0 5a1 1 0 1 1 0 2H3a1 1 0 1 1 0-2z" /></svg>));
MenuBar.displayName = "MenuBar";