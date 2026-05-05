import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
export const Ban = React.memo(React.forwardRef((props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" width="1em" height="1em" strokeLinecap="round" strokeLinejoin="round" shapeRendering="geometricPrecision" ref={ref} {...props}><g clipPath="url(#a)"><circle cx={12} cy={12} r={9} stroke="currentColor" strokeWidth={2} /><path fill="currentColor" d="M18.435 7.121a1 1 0 1 0-1.414-1.414L5.707 17.021a1 1 0 1 0 1.414 1.414z" /></g><defs><clipPath id="a"><path fill="#fff" d="M0 0h24v24H0z" /></clipPath></defs></svg>));
Ban.displayName = "Ban";