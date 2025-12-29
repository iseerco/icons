import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const LaughBeam = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M12,0A12.013,12.013,0,0,0,0,12c.6,15.9,23.4,15.893,24,0A12.013,12.013,0,0,0,12,0ZM8,7c1.768,0,3,2.108,3,4H9c0-1.054-.679-2-1-2s-1,.946-1,2H5C5,9.108,6.232,7,8,7Zm4.007,12C9,19,7.05,16,7,14H17C17,16,15,19,12.007,19ZM17,11c0-1.054-.679-2-1-2s-1,.946-1,2H13c.248-5.287,5.754-5.281,6,0Z"/></svg>

);
