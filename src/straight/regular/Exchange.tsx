import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const Exchange = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M24,18H3l2.6,2.6L4.183,22.011l-3.6-3.6a2,2,0,0,1,0-2.828l3.569-3.569,1.414,1.414L3,16H24Zm-5.574-7.427,1.414,1.414,3.574-3.573a2,2,0,0,0,0-2.828L19.821,1.993,18.407,3.407,21,6H0V8H21Z"/></svg>

);
