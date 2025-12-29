import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const Ambulance = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M24,15.062a5.97,5.97,0,0,0-.517-2.438L20.706,6.375A4.007,4.007,0,0,0,17.05,4H14L13.243.97a1.281,1.281,0,0,0-2.486,0L10,4H3A3,3,0,0,0,0,7V20H2.041A3.465,3.465,0,0,0,2,20.5a3.5,3.5,0,0,0,7,0,3.465,3.465,0,0,0-.041-.5h6.082a3.465,3.465,0,0,0-.041.5,3.5,3.5,0,0,0,7,0,3.465,3.465,0,0,0-.041-.5H24ZM18.878,7.188,20.572,11H16V6h1.05A2,2,0,0,1,18.878,7.188ZM7,20.5a1.5,1.5,0,0,1-3,0,1.418,1.418,0,0,1,.093-.5H6.907A1.418,1.418,0,0,1,7,20.5Zm13,0a1.5,1.5,0,0,1-3,0,1.418,1.418,0,0,1,.093-.5h2.814A1.418,1.418,0,0,1,20,20.5ZM22,18H2V7A1,1,0,0,1,3,6H14v7h7.461l.194.437A3.969,3.969,0,0,1,22,15.062ZM9,11h2v2H9v2H7V13H5V11H7V9H9Z"/></svg>

);
