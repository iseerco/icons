import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiTsKeyboardBrightnessLow = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M17,16H7v-1h10v1ZM12,6c.55,0,1-.45,1-1s-.45-1-1-1-1,.45-1,1,.45,1,1,1ZM2,15c0-.55-.45-1-1-1S0,14.45,0,15s.45,1,1,1,1-.45,1-1Zm22,0c0-.55-.45-1-1-1s-1,.45-1,1,.45,1,1,1,1-.45,1-1Zm-4-6c.55,0,1-.45,1-1s-.45-1-1-1-1,.45-1,1,.45,1,1,1Zm-16,0c.55,0,1-.45,1-1s-.45-1-1-1-1,.45-1,1,.45,1,1,1Z"/></svg>

);
