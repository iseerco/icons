import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const SquareY = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m19,0H5C2.243,0,0,2.243,0,5v14c0,2.757,2.243,5,5,5h14c2.757,0,5-2.243,5-5V5c0-2.757-2.243-5-5-5Zm3,19c0,1.654-1.346,3-3,3H5c-1.654,0-3-1.346-3-3V5c0-1.654,1.346-3,3-3h14c1.654,0,3,1.346,3,3v14Zm-4.208-12.391l-4.792,6.23v5.16c0,.553-.448,1-1,1s-1-.447-1-1v-5.16l-4.792-6.23c-.337-.438-.255-1.065.183-1.402.437-.336,1.066-.256,1.402.184l4.208,5.47,4.208-5.47c.336-.439.963-.52,1.402-.184.438.337.52.965.183,1.402Z"/></svg>

);
