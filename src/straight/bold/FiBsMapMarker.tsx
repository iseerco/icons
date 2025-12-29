import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsMapMarker = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M10,8a2,2,0,1,1,2,2A2,2,0,0,1,10,8ZM7.97,24.06,0,21.608V12A3.5,3.5,0,0,1,4.032,8.544a7.992,7.992,0,1,1,15.807,1.03l1.686.564A3.493,3.493,0,0,1,24,13.483V24.114l-8.483-2.066Zm.494-12.524L12,14.993l3.547-3.469a5,5,0,1,0-7.083.012ZM3,19.392l5.03,1.547,7.453-1.987L21,20.3V13.483a.5.5,0,0,0-.362-.48l-1.931-.645a8.032,8.032,0,0,1-1.05,1.3L12,19.189,6.355,13.668a8,8,0,0,1-1.236-1.61L3.76,11.567a.54.54,0,0,0-.537.019A.489.489,0,0,0,3,12Z"/></svg>

);
