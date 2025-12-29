import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiTsFilesMedical = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m17.246,0h-7.746c-1.378,0-2.5,1.122-2.5,2.5v1.5h-2.5c-1.378,0-2.5,1.122-2.5,2.5v17.5h16v-5h4V4.754L17.246,0Zm-.246,1.168l3.832,3.832h-3.832V1.168Zm0,21.832H3V6.5c0-.827.673-1.5,1.5-1.5h2.5v14h10v4Zm4-5h-13V2.5c0-.827.673-1.5,1.5-1.5h6.5v5h5v12Zm-6-7h3v1h-3v3h-1v-3h-3v-1h3v-3h1v3Z"/></svg>

);
