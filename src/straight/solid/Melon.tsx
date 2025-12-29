import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const Melon = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M24.043,10.4A13.633,13.633,0,0,1,10.4,24.04,13.6,13.6,0,0,1,.753,20.05l-.71-.71,4.829-4.831.512.513a6.816,6.816,0,0,0,9.638-9.64l-.513-.513L19.337.04l.71.709A13.56,13.56,0,0,1,24.043,10.4ZM6.8,13.6a4.808,4.808,0,0,0,6.8-6.8l-.513-.513-6.8,6.8Z"/></svg>

);
