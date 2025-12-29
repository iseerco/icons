import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiTrCurve = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m.615,24.038c-.276,0-.5-.224-.5-.5C.115,10.623,10.623.115,23.538.115c.276,0,.5.224.5.5s-.224.5-.5.5C11.174,1.115,1.115,11.174,1.115,23.538c0,.276-.224.5-.5.5Z"/>
</svg>

);
