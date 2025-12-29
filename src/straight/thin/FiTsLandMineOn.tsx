import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiTsLandMineOn = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="M22.434,23l-.693-4.854c-.175-1.224-1.238-2.146-2.475-2.146h-2.266v-4H7v4h-2.266c-1.236,0-2.3,.923-2.475,2.146l-.693,4.854H0v1H24v-1h-1.566ZM8,13h8v3H8v-3Zm-4.995,7h12.995v-1H3.148l.102-.713c.104-.733,.743-1.287,1.484-1.287h14.531c.741,0,1.38,.554,1.484,1.287l.102,.713h-2.852v1h2.995l.429,3H2.577l.429-3ZM12.5,7h-1V0h1V7Zm5.354,1.854l-.707-.707,5-5,.707,.707-5,5Zm-11.707,0L1.146,3.854l.707-.707,5,5-.707,.707Z"/>
</svg>

);
