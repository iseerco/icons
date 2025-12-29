import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiTsMapMarkerSmile = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M19.071,2.929c-1.889-1.889-4.4-2.929-7.071-2.929S6.817,1.04,4.929,2.929c-3.899,3.899-3.899,10.243,.004,14.146l7.067,6.912,7.071-6.916c3.899-3.899,3.899-10.243,0-14.142Zm-.703,13.431l-6.368,6.229-6.364-6.225c-3.509-3.509-3.509-9.219,0-12.728,1.7-1.7,3.96-2.636,6.364-2.636s4.664,.936,6.364,2.636c3.509,3.509,3.509,9.219,.004,12.724Zm-2.722-4.87l.707,.707c-1.163,1.163-2.708,1.803-4.353,1.803s-3.191-.64-4.354-1.803l.707-.707c.974,.974,2.27,1.51,3.647,1.51s2.672-.536,3.646-1.51Zm-7.646-3.49c0-.552,.448-1,1-1s1,.448,1,1-.448,1-1,1-1-.448-1-1Zm6,0c0-.552,.448-1,1-1s1,.448,1,1-.448,1-1,1-1-.448-1-1Z"/></svg>

);
