import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsDiceAlt = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M20.5,9h-8A3.5,3.5,0,0,0,9,12.5V24H24V12.5A3.5,3.5,0,0,0,20.5,9ZM21,21H12V12.5a.5.5,0,0,1,.5-.5h8a.5.5,0,0,1,.5.5Zm-5-6.5A1.5,1.5,0,1,1,14.5,13,1.5,1.5,0,0,1,16,14.5ZM8,10A1.5,1.5,0,1,1,6.5,8.5,1.5,1.5,0,0,1,8,10Zm2-2a1.5,1.5,0,1,1,1.5-1.5A1.5,1.5,0,0,1,10,8ZM20,18.5A1.5,1.5,0,1,1,18.5,17,1.5,1.5,0,0,1,20,18.5ZM3.147,10.217,7,14.07v4.243L1.025,12.338a3.5,3.5,0,0,1,0-4.95L7.389,1.024A3.476,3.476,0,0,1,9.863,0h0a3.48,3.48,0,0,1,2.475,1.024L18.314,7H14.072L10.218,3.146a.512.512,0,0,0-.707,0L3.146,9.51a.5.5,0,0,0,0,.707Z"/></svg>

);
