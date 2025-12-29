import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBrDumbbellHorizontal = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="M24,12c0-.652-.419-1.202-1-1.408V6.5c0-1.93-1.57-3.5-3.5-3.5h-1c-1.93,0-3.5,1.57-3.5,3.5v4h-6V6.5c0-1.93-1.57-3.5-3.5-3.5h-1c-1.93,0-3.5,1.57-3.5,3.5v4.092c-.581,.207-1,.756-1,1.408s.419,1.202,1,1.408v4.092c0,1.93,1.57,3.5,3.5,3.5h1c1.93,0,3.5-1.57,3.5-3.5v-4h6v4c0,1.93,1.57,3.5,3.5,3.5h1c1.93,0,3.5-1.57,3.5-3.5v-4.092c.581-.207,1-.756,1-1.408ZM6,17.5c0,.275-.224,.5-.5,.5h-1c-.276,0-.5-.225-.5-.5V6.5c0-.276,.224-.5,.5-.5h1c.276,0,.5,.224,.5,.5v11Zm14,0c0,.275-.224,.5-.5,.5h-1c-.276,0-.5-.225-.5-.5V6.5c0-.276,.224-.5,.5-.5h1c.276,0,.5,.224,.5,.5v11Z"/>
</svg>

);
