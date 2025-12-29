import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const BlockBrick = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M19,0H5C2.243,0,0,2.243,0,5v14c0,2.757,2.243,5,5,5h14c2.757,0,5-2.243,5-5V5c0-2.757-2.243-5-5-5ZM8,17v-4h8v4H8Zm5-6V7h9v4H13Zm-5-6V2h8v3H8Zm3,2v4H2V7H11ZM2,13H6v4H2v-4Zm16,0h4v4h-4v-4Zm4-8h-4V2h1c1.654,0,3,1.346,3,3ZM5,2h1v3H2c0-1.654,1.346-3,3-3ZM2,19H11v3H5c-1.654,0-3-1.346-3-3Zm17,3h-6v-3h9c0,1.654-1.346,3-3,3Z"/></svg>

);
