import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsArrowUpFromSquare = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M7.604,8.016l-2.207-2.032L10.189,.777c1.017-1.019,2.604-1.02,3.578-.045l4.836,5.252-2.207,2.032-2.896-3.147v11.131h-3V4.868l-2.896,3.148Zm13.602-1.709l-2.233,2.056c.013,.044,.028,.088,.028,.137v12.5H5V8.5c0-.049,.015-.092,.028-.137l-2.233-2.056c-.489,.602-.794,1.359-.794,2.193v15.5H22V8.5c0-.834-.305-1.591-.794-2.193Z"/></svg>

);
