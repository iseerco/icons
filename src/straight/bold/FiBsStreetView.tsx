import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsStreetView = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M9.577,2.5c0-1.381,1.119-2.5,2.5-2.5s2.5,1.119,2.5,2.5-1.119,2.5-2.5,2.5-2.5-1.119-2.5-2.5Zm.423,12.5h-2v-5.5c0-1.93,1.57-3.5,3.5-3.5h1c1.93,0,3.5,1.57,3.5,3.5v5.5h-2v4h-4v-4Zm1-3h2v-2.5c0-.276-.225-.5-.5-.5h-1c-.275,0-.5,.224-.5,.5v2.5Zm6,4.283v3.028c1.404,.191,2.477,.444,3.188,.688-1.401,.48-4.191,1-8.188,1s-6.787-.52-8.188-1c.712-.244,1.785-.497,3.188-.688v-3.028c-3.388,.408-7,1.389-7,3.717,0,3.711,9.185,4,12,4s12-.289,12-4c0-2.328-3.612-3.308-7-3.717Z"/></svg>

);
