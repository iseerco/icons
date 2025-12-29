import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const ArrowUpSquareTriangle = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M7.415,.586l4.5,4.5-1.414,1.414-3.5-3.5V24h-2V3L1.5,6.5,.086,5.086,4.586,.586c.756-.756,2.074-.756,2.829,0Zm15.585,9.414H14V1h9V10Zm-2-7h-5v5h5V3Zm2.975,20H13.025l5.475-10.098,5.475,10.098Zm-7.59-2h4.23l-2.115-3.902-2.115,3.902Z"/></svg>

);
