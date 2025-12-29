import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const RectangleBarcode = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M19,2H5C2.243,2,0,4.243,0,7v10c0,2.757,2.243,5,5,5h14c2.757,0,5-2.243,5-5V7c0-2.757-2.243-5-5-5ZM6,17c0,.553-.447,1-1,1s-1-.447-1-1V7c0-.552,.447-1,1-1s1,.448,1,1v10Zm4,0c0,.553-.447,1-1,1s-1-.447-1-1V7c0-.552,.447-1,1-1s1,.448,1,1v10Zm4-.5c0,.828-.672,1.5-1.5,1.5s-1.5-.672-1.5-1.5V7.5c0-.829,.672-1.5,1.5-1.5s1.5,.671,1.5,1.5v9Zm6,.5c0,.553-.447,1-1,1s-1-.447-1-1V7c0-.552,.447-1,1-1s1,.448,1,1v10Zm-4.5,1h0c-.276,0-.5-.224-.5-.5V6.5c0-.276,.224-.5,.5-.5h0c.276,0,.5,.224,.5,.5v11c0,.276-.224,.5-.5,.5Z"/></svg>

);
