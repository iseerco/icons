import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const CodeCommit = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M23,11h-4.072c-.487-3.388-3.408-6-6.928-6s-6.442,2.612-6.928,6H1c-.552,0-1,.448-1,1s.448,1,1,1H5.072c.487,3.388,3.408,6,6.928,6s6.441-2.612,6.928-6h4.072c.553,0,1-.448,1-1s-.447-1-1-1Zm-11,6c-2.757,0-5-2.243-5-5s2.243-5,5-5,5,2.243,5,5-2.243,5-5,5Z"/></svg>

);
