import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsAirConditioner = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M20.5,0H3.5C1.57,0,0,1.57,0,3.5v7.5H24V3.5c0-1.93-1.57-3.5-3.5-3.5Zm.5,8h-2v-2H5v2H3V3.5c0-.276,.225-.5,.5-.5H20.5c.275,0,.5,.224,.5,.5v4.5Zm-13,5h3v6.5c0,2.481-2.019,4.5-4.5,4.5s-4.5-2.019-4.5-4.5,2.188-4.5,4-4.5v3l.039-.002c-.251,.047-1.039,.675-1.039,1.502s.673,1.5,1.5,1.5,1.5-.673,1.5-1.5v-6.5Zm14,6.5c0,2.481-2.019,4.5-4.5,4.5s-4.5-2.019-4.5-4.5v-6.5h3v6.5c0,.827,.673,1.5,1.5,1.5s1.5-.673,1.5-1.5-.788-1.455-1.039-1.502l.039-2.998c1.812,0,4,2.007,4,4.5Z"/></svg>

);
