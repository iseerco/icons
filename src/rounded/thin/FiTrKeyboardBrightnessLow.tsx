import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiTrKeyboardBrightnessLow = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M16.5,16H7.5c-.28,0-.5-.22-.5-.5s.22-.5,.5-.5h9c.28,0,.5,.22,.5,.5s-.22,.5-.5,.5ZM12,6c.55,0,1-.45,1-1s-.45-1-1-1-1,.45-1,1,.45,1,1,1ZM2,15c0-.55-.45-1-1-1S0,14.45,0,15s.45,1,1,1,1-.45,1-1Zm22,0c0-.55-.45-1-1-1s-1,.45-1,1,.45,1,1,1,1-.45,1-1Zm-4-6c.55,0,1-.45,1-1s-.45-1-1-1-1,.45-1,1,.45,1,1,1Zm-16,0c.55,0,1-.45,1-1s-.45-1-1-1-1,.45-1,1,.45,1,1,1Z"/></svg>

);
