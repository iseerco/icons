import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FlorinSign = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M17.38,2.59l-3.37,7.41h4.99v2h-5.9l-4.66,10.24c-.49,1.07-1.56,1.76-2.73,1.76H0v-2H5.71c.39,0,.75-.23,.91-.59l4.28-9.41H6v-2h5.81L15.56,1.76c.49-1.07,1.56-1.76,2.73-1.76h5.71V2h-5.71c-.39,0-.75,.23-.91,.59Z"/></svg>

);
