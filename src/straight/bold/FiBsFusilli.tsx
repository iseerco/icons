import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsFusilli = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="M21,4V0h-1c-1.657,0-3,1.343-3,3h-.5c-1.93,0-3.5,1.57-3.5,3.5v.5h-1.5c-1.93,0-3.5,1.57-3.5,3.5v.5h-1.5c-1.93,0-3.5,1.57-3.5,3.5v.641c-1.722,.446-3,1.997-3,3.859v1H3v4h1c1.657,0,3-1.343,3-3h.5c1.93,0,3.5-1.57,3.5-3.5v-.5h1.5c1.93,0,3.5-1.57,3.5-3.5v-.5h1.5c1.93,0,3.5-1.57,3.5-3.5v-.641c1.722-.446,3-1.997,3-3.859v-1h-3ZM7.5,18h-1.5v-3.5c0-.275,.225-.5,.5-.5h1.5v3.5c0,.275-.225,.5-.5,.5Zm5-4h-1.5v-3.5c0-.276,.225-.5,.5-.5h1.5v3.5c0,.275-.225,.5-.5,.5Zm5-4h-1.5v-3.5c0-.276,.225-.5,.5-.5h1.5v3.5c0,.276-.225,.5-.5,.5Z"/>
</svg>

);
