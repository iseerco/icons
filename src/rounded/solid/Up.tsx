import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const Up = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M10,24c-1.66,0-3-1.34-3-3V13h-1.92c-1.17,0-2.29-.62-2.8-1.67-.57-1.18-.34-2.51,.57-3.43L9.17,1.18c1.57-1.57,4.09-1.57,5.64-.02,0,0,6.37,6.77,6.37,6.77,.85,.84,1.1,2.09,.63,3.22-.47,1.13-1.52,1.84-2.74,1.85h-2.06v8c0,1.66-1.34,3-3,3h-4Z"/></svg>

);
