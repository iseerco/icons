import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBrTachometer = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M23.9,11.4A12.039,12.039,0,0,0,13.381,1.077C2.019-.212-4.6,13.774,3.761,21.629A5.181,5.181,0,0,0,7.336,23h9.323a5.308,5.308,0,0,0,3.726-1.512A11.859,11.859,0,0,0,23.9,11.4Zm-5.608,7.944A2.327,2.327,0,0,1,16.659,20H7.336a2.225,2.225,0,0,1-1.52-.557,8.972,8.972,0,1,1,15.109-7.67A8.889,8.889,0,0,1,18.292,19.339Zm-1.731-10.9a1.5,1.5,0,0,1,0,2.122L14,13.125A2,2,0,1,1,11.875,11l2.564-2.565A1.5,1.5,0,0,1,16.561,8.439Z"/></svg>

);
