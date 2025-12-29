import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiTsPresentation = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m24,16v-1h-2V2.5c0-1.379-1.121-2.5-2.5-2.5H4.5c-1.379,0-2.5,1.121-2.5,2.5v12.5H0v1h11.5v5h-3c-1.379,0-2.5,1.121-2.5,2.5v.5h1v-.5c0-.827.673-1.5,1.5-1.5h7c.827,0,1.5.673,1.5,1.5v.5h1v-.5c0-1.379-1.121-2.5-2.5-2.5h-3v-5h11.5ZM3,2.5c0-.827.673-1.5,1.5-1.5h15c.827,0,1.5.673,1.5,1.5v12.5H3V2.5Z"/>
</svg>

);
