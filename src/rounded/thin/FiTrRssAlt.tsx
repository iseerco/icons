import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiTrRssAlt = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m3,18c-1.654,0-3,1.346-3,3s1.346,3,3,3,3-1.346,3-3-1.346-3-3-3Zm0,5c-1.103,0-2-.897-2-2s.897-2,2-2,2,.897,2,2-.897,2-2,2Zm21,.5c0,.276-.224.5-.5.5s-.5-.224-.5-.5C23,11.093,12.907,1,.5,1c-.276,0-.5-.224-.5-.5s.224-.5.5-.5c12.958,0,23.5,10.542,23.5,23.5Zm-9,0c0,.276-.224.5-.5.5s-.5-.224-.5-.5c0-7.444-6.056-13.5-13.5-13.5-.276,0-.5-.224-.5-.5s.224-.5.5-.5c7.995,0,14.5,6.505,14.5,14.5Z"/></svg>

);
