import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsTransformationShapes = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m6.5,0C2.916,0,0,2.916,0,6.5s2.916,6.5,6.5,6.5,6.5-2.916,6.5-6.5S10.084,0,6.5,0Zm0,10c-1.93,0-3.5-1.57-3.5-3.5s1.57-3.5,3.5-3.5,3.5,1.57,3.5,3.5-1.57,3.5-3.5,3.5Zm2.207,8.793c.39.391.39,1.024,0,1.414l-3.707,3.793v-3h-1.5c-1.93,0-3.5-1.57-3.5-3.5v-2.5h3v2.5c0,.275.225.5.5.5h1.5v-3l3.707,3.793Zm15.293-12.293v2.5h-3v-2.5c0-.275-.225-.5-.5-.5h-1.5v3l-3.707-3.793c-.39-.39-.39-1.024,0-1.414l3.707-3.793v3h1.5c1.93,0,3.5,1.57,3.5,3.5Zm-12,17.5h12v-12h-12v12Zm3-9h6v6h-6v-6Z"/>
</svg>

);
