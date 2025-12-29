import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const Sauce = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M17,9V5H13.833L13,0H11l-.833,5H7V9a3,3,0,0,0-3,3V24H20V12A3,3,0,0,0,17,9ZM9,7h6V9H9Zm9,15H6V12a1,1,0,0,1,1-1H17a1,1,0,0,1,1,1ZM7.974,20h8V14h-8Zm2-4h4v2h-4Z"/></svg>

);
