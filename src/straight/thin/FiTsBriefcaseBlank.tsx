import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiTsBriefcaseBlank = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M21.5,4h-3.5V1.5c0-.83-.67-1.5-1.5-1.5H7.5c-.83,0-1.5,.67-1.5,1.5v2.5H2.5c-1.38,0-2.5,1.12-2.5,2.5V24H24V6.5c0-1.38-1.12-2.5-2.5-2.5ZM7,1.5c0-.28,.22-.5,.5-.5h9c.28,0,.5,.22,.5,.5v2.5H7V1.5ZM23,23H1V6.5c0-.83,.67-1.5,1.5-1.5H21.5c.83,0,1.5,.67,1.5,1.5V23Z"/></svg>

);
