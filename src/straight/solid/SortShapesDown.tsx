import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const SortShapesDown = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M10.5,17.5l1.41,1.41-4.5,4.5c-.39,.39-.9,.58-1.41,.58s-1.02-.19-1.41-.58L.09,18.91l1.41-1.41,3.5,3.5V0h2V21l3.5-3.5ZM23,1H14V10h9V1Zm-4.48,11.98l-5.52,10.02h10.99l-5.47-10.02Z"/></svg>

);
