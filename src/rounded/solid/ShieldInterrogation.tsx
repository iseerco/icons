import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const ShieldInterrogation = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M18.581,2.14,12.316.051a1,1,0,0,0-.632,0L5.418,2.14A4.993,4.993,0,0,0,2,6.883V12c0,7.563,9.2,11.74,9.594,11.914a1,1,0,0,0,.812,0C12.8,23.74,22,19.563,22,12V6.883A4.993,4.993,0,0,0,18.581,2.14ZM12,19a1,1,0,1,1,1-1A1,1,0,0,1,12,19Zm1.928-6.443A1.987,1.987,0,0,0,13,14a1,1,0,0,1-2,0,3.953,3.953,0,0,1,1.963-3.195,1.994,1.994,0,0,0,1-2.124,2.024,2.024,0,0,0-1.6-1.6A2,2,0,0,0,10,9.052a1,1,0,0,1-2,0A4,4,0,0,1,9.429,5.987a4,4,0,1,1,4.5,6.57Z"/></svg>

);
