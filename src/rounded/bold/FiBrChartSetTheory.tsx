import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBrChartSetTheory = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M19.42,9.592A7.426,7.426,0,0,0,19.5,8.5a7.5,7.5,0,0,0-15,0,7.426,7.426,0,0,0,.08,1.092A7.5,7.5,0,1,0,12,22.5a7.5,7.5,0,1,0,7.42-12.9ZM12,4a4.505,4.505,0,0,1,4.5,4.5,4.583,4.583,0,0,1-.028.5A7.463,7.463,0,0,0,12,10.5,7.463,7.463,0,0,0,7.528,9,4.583,4.583,0,0,1,7.5,8.5,4.505,4.505,0,0,1,12,4ZM3,16.5a4.505,4.505,0,0,1,2.607-4.082,7.548,7.548,0,0,0,3.473,2.99A7.494,7.494,0,0,0,10,20.24,4.5,4.5,0,0,1,3,16.5ZM16.5,21a4.47,4.47,0,0,1-2.5-.76,7.494,7.494,0,0,0,.92-4.832,7.548,7.548,0,0,0,3.473-2.99A4.5,4.5,0,0,1,16.5,21Z"/></svg>

);
