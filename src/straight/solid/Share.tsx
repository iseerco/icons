import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const Share = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M19.333,14.667A4.664,4.664,0,0,0,15.49,16.69l-6.5-2.935A4.665,4.665,0,0,0,9,10.261l6.494-2.949a4.665,4.665,0,1,0-.824-2.645,4.712,4.712,0,0,0,.067.792L7.846,8.587a4.667,4.667,0,1,0-.014,6.839l6.9,3.117a4.667,4.667,0,1,0,4.6-3.876Z"/></svg>

);
