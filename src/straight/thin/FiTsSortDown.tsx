import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiTsSortDown = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M11.973,17c-.562,0-1.101-.24-1.476-.658L2.865,8H21.08l-7.635,8.346c-.372,.414-.91,.654-1.473,.654ZM5.135,9l6.104,6.67c.383,.428,1.089,.424,1.466,.004l6.106-6.674H5.135Z"/></svg>

);
