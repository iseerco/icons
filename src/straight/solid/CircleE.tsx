import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const CircleE = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m12,0C5.383,0,0,5.383,0,12s5.383,12,12,12,12-5.383,12-12S18.617,0,12,0Zm4.5,8h-7.5c-.275,0-.5.224-.5.5v2.5h6v2h-6v2.5c0,.276.225.5.5.5h7.5v2h-7.5c-1.379,0-2.5-1.122-2.5-2.5v-7c0-1.378,1.121-2.5,2.5-2.5h7.5v2Z"/></svg>

);
