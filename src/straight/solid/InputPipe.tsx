import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const InputPipe = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m21,3H3c-1.654,0-3,1.346-3,3v15h24V6c0-1.654-1.346-3-3-3Zm-14,14h-2V7h2v10Z"/></svg>

);
