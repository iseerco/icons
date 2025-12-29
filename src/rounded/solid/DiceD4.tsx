import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const DiceD4 = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M11,24a5,5,0,0,1-1.627-.637L1.707,18.521a4,4,0,0,1-1-5.541L8.845,1.406A4.045,4.045,0,0,1,11,0ZM23.287,12.967,15.155,1.406,15.12,1.36A3.977,3.977,0,0,0,13,0V24a5.011,5.011,0,0,0,1.627-.637l7.73-4.885A3.984,3.984,0,0,0,23.287,12.967Z"/></svg>

);
