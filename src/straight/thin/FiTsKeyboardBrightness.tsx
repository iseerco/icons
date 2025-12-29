import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiTsKeyboardBrightness = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M17,17H7v-1h10v1ZM12.5,3.5h-1v6h1V3.5ZM4,16H0v1H4v-1Zm20,0h-4v1h4v-1Zm-2.65-8.15l-.71-.71-4.05,4.05,.71,.71,4.05-4.05Zm-13.95,3.34L3.35,7.15l-.71,.71,4.05,4.05,.71-.71Z"/></svg>

);
