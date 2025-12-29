import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsDollyFlatbedEmpty = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m24,21h-2.55c.033.162.05.329.05.5,0,1.381-1.119,2.5-2.5,2.5s-2.5-1.119-2.5-2.5c0-.171.017-.338.05-.5h-5.6c.033.162.05.329.05.5,0,1.381-1.119,2.5-2.5,2.5s-2.5-1.119-2.5-2.5c0-.181.02-.358.056-.528-1.721-.219-3.056-1.693-3.056-3.472V3.5c0-.275-.224-.5-.5-.5H0V0h2.5c1.93,0,3.5,1.57,3.5,3.5v14c0,.275.224.5.5.5h17.5v3Z"/>
</svg>

);
