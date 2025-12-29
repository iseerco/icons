import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const ArrowUpSquareTriangle = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M7.372,.586l4.5,4.5-1.414,1.414-3.5-3.5V24h-2V3L1.457,6.5,.043,5.086,4.543,.586c.756-.756,2.074-.756,2.829,0Zm15.628,.414H14V10h9V1Zm-4.5,11.902l-5.475,10.098h10.949l-5.475-10.098Z"/></svg>

);
