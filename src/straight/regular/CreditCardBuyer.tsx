import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const CreditCardBuyer = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m5.5,11c.828,0,1.5.672,1.5,1.5s-.672,1.5-1.5,1.5-1.5-.672-1.5-1.5.672-1.5,1.5-1.5ZM24,3v12.5c0-1.63-.792-3.065-2-3.977v-4.523H2v9h12.05c.073.725.294,1.4.643,2H0V3C0,1.346,1.346,0,3,0h18c1.654,0,3,1.346,3,3Zm-2,2v-2c0-.551-.448-1-1-1H3c-.552,0-1,.449-1,1v2h20Zm-3,13c1.379,0,2.5-1.121,2.5-2.5s-1.121-2.5-2.5-2.5-2.5,1.121-2.5,2.5,1.121,2.5,2.5,2.5Zm2,1h-4c-1.654,0-3,1.346-3,3v2h2v-2c0-.551.448-1,1-1h4c.552,0,1,.449,1,1v2h2v-2c0-1.654-1.346-3-3-3Z"/>
</svg>

);
