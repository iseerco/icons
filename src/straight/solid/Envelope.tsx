import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const Envelope = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M9.878,12.546a3.007,3.007,0,0,0,4.244,0l9.659-9.66A3,3,0,0,0,21,1H3A3,3,0,0,0,.219,2.886Z"/><path d="M15.536,13.96a5.007,5.007,0,0,1-7.072,0L0,5.5V23H24V5.5Z"/></svg>

);
