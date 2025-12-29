import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const Devices = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M2,16H12v6H6v-2h4v-2H0V4C0,2.35,1.35,1,3,1H19c1.65,0,3,1.35,3,3v3h-2v-3c0-.55-.45-1-1-1H3c-.55,0-1,.45-1,1v12Zm22-4v12H14V12c0-1.65,1.35-3,3-3h4c1.65,0,3,1.35,3,3Zm-2,0c0-.55-.45-1-1-1h-4c-.55,0-1,.45-1,1v10h6V12Z"/></svg>

);
