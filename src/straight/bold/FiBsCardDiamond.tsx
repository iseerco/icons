import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsCardDiamond = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m17.5,0H6.5c-1.93,0-3.5,1.57-3.5,3.5v20.5h18V3.5c0-1.93-1.57-3.5-3.5-3.5Zm.5,21H6V3.5c0-.276.224-.5.5-.5h11c.276,0,.5.224.5.5v17.5Zm-6-14l3.5,5-3.5,5-3.5-5,3.5-5Z"/>
</svg>

);
