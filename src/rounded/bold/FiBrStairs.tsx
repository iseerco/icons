import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBrStairs = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m24,1.5c0,.829-.672,1.5-1.5,1.5h-4c-.275,0-.5.224-.5.5v3c0,.829-.672,1.5-1.5,1.5h-3c-.275,0-.5.224-.5.5v3c0,.829-.671,1.5-1.5,1.5h-3c-.276,0-.5.224-.5.5v3c0,.829-.671,1.5-1.5,1.5h-3c-.276,0-.5.224-.5.5v4c0,.829-.671,1.5-1.5,1.5s-1.5-.671-1.5-1.5v-4c0-1.93,1.57-3.5,3.5-3.5h1.5v-1.5c0-1.93,1.57-3.5,3.5-3.5h1.5v-1.5c0-1.93,1.57-3.5,3.5-3.5h1.5v-1.5c0-1.93,1.57-3.5,3.5-3.5h4c.828,0,1.5.671,1.5,1.5Z"/>
</svg>

);
