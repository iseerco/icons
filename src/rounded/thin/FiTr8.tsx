import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiTr8 = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M14.39,9.391c1.554-.849,2.61-2.499,2.61-4.391,0-2.757-2.243-5-5-5S7,2.243,7,5c0,1.892,1.056,3.541,2.61,4.391-2.967,1-5.11,3.809-5.11,7.109,0,4.136,3.364,7.5,7.5,7.5s7.5-3.364,7.5-7.5c0-3.3-2.142-6.109-5.11-7.109Zm-6.39-4.391c0-2.206,1.794-4,4-4s4,1.794,4,4-1.794,4-4,4-4-1.794-4-4Zm4,18c-3.584,0-6.5-2.916-6.5-6.5s2.916-6.5,6.5-6.5,6.5,2.916,6.5,6.5-2.916,6.5-6.5,6.5Z"/></svg>

);
