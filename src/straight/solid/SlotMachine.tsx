import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const SlotMachine = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="M23,3.723v6.277c0,1.654-1.346,3-3,3h-2v2h-5v-6h5v2h2c.552,0,1-.449,1-1V3.723c-.595-.346-1-.984-1-1.723,0-1.105,.895-2,2-2s2,.895,2,2c0,.738-.405,1.376-1,1.723ZM9,0C4.725,0,1.145,2.998,.232,7H17.768C16.855,2.998,13.275,0,9,0ZM0,24H18v-7H0v7ZM11,15v-6H7v6h4Zm-6-6H0v6H5v-6Z"/>
</svg>

);
