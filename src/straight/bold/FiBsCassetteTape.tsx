import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsCassetteTape = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M20.5,3H3.5c-1.93,0-3.5,1.57-3.5,3.5v14.5H24V6.5c0-1.93-1.57-3.5-3.5-3.5Zm.5,15h-2.8l-1.2-2H7l-1.33,2H3V6.5c0-.28,.22-.5,.5-.5H20.5c.28,0,.5,.22,.5,.5v11.5Zm-6.44-9c-.34,.59-.56,1.27-.56,2s.21,1.41,.56,2h-5.11c.34-.59,.56-1.27,.56-2s-.21-1.41-.56-2h5.11Zm-6.56,2c0,1.1-.9,2-2,2s-2-.9-2-2,.9-2,2-2,2,.9,2,2Zm12,0c0,1.1-.9,2-2,2s-2-.9-2-2,.9-2,2-2,2,.9,2,2Z"/></svg>

);
