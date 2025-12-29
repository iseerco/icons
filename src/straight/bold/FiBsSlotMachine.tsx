import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsSlotMachine = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="M24,2.5c0-1.381-1.119-2.5-2.5-2.5s-2.5,1.119-2.5,2.5c0,.815,.396,1.532,1,1.989v6.011c0,.276-.225,.5-.5,.5h-1.5v-2C18,4.038,13.963,0,9,0S0,4.038,0,9v15H18V14h1.5c1.93,0,3.5-1.57,3.5-3.5V4.489c.604-.456,1-1.173,1-1.989ZM5,11v3H3v-3h2Zm3,0h2v3h-2v-3Zm5,0h2v3h-2v-3ZM9,3c2.967,0,5.431,2.167,5.91,5H3.09c.478-2.833,2.942-5,5.91-5ZM3,21v-4H15v4H3Z"/>
</svg>

);
