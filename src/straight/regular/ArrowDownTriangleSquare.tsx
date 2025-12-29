import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const ArrowDownTriangleSquare = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M10.5,17.5l1.41,1.41-4.5,4.5c-.39,.39-.9,.58-1.41,.58s-1.02-.19-1.41-.58L.09,18.91l1.41-1.41,3.5,3.5V0h2V21l3.5-3.5Zm3.5-3.5h9v9H14V14Zm2,7h5v-5h-5v5Zm7.99-10H13L18.52,.98l5.47,10.02Zm-7.61-2h4.24l-2.11-3.86-2.13,3.86Z"/></svg>

);
