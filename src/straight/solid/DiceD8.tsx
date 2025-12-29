import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const DiceD8 = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M.5,10.576,9.846.724A3.045,3.045,0,0,1,11,.007V13.662ZM13,13.662l10.5-3.088L14.155.725,14.109.676A2.9,2.9,0,0,0,13,0Zm0,2.085V24a3.113,3.113,0,0,0,1.155-.731L24,12.513Zm-2,0L0,12.513l9.891,10.8A2.953,2.953,0,0,0,11,24Z"/></svg>

);
