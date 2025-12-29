import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const DiceD6 = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M1.852,5.59,10.457.428a2.989,2.989,0,0,1,3.086,0L22.065,5.54,12,11.508ZM11,13.242,1,7.408V18.093l9.457,5.674A2.982,2.982,0,0,0,11,24Zm2,0V24a3.021,3.021,0,0,0,.544-.233L23,18.093V7.311Z"/></svg>

);
