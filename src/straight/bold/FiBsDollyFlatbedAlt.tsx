import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsDollyFlatbedAlt = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m6.5,18h17.5v3h-2.55c.033.162.05.329.05.5,0,1.381-1.119,2.5-2.5,2.5s-2.5-1.119-2.5-2.5c0-.171.017-.338.05-.5h-5.6c.033.162.05.329.05.5,0,1.381-1.119,2.5-2.5,2.5s-2.5-1.119-2.5-2.5c0-.181.02-.358.056-.528-1.721-.219-3.056-1.693-3.056-3.472V3.5c0-.275-.224-.5-.5-.5H0V0h2.5c1.93,0,3.5,1.57,3.5,3.5v14c0,.275.224.5.5.5Zm1.5-10h16v8H8v-8Zm3,5h10v-2h-10v2ZM13.94,0h-6v6h6V0Zm2.06,2v4h8V2h-8Z"/>
</svg>

);
