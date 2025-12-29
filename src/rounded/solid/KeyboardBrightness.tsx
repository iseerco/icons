import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const KeyboardBrightness = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M17,17c0,.55-.45,1-1,1H8c-.55,0-1-.45-1-1s.45-1,1-1h8c.55,0,1,.45,1,1Zm-5-7c.55,0,1-.45,1-1V4c0-.55-.45-1-1-1s-1,.45-1,1v5c0,.55,.45,1,1,1Zm-8,6H1c-.55,0-1,.45-1,1s.45,1,1,1h3c.55,0,1-.45,1-1s-.45-1-1-1Zm19,0h-3c-.55,0-1,.45-1,1s.45,1,1,1h3c.55,0,1-.45,1-1s-.45-1-1-1Zm-1.29-8.71c-.39-.39-1.02-.39-1.41,0l-3,3c-.39,.39-.39,1.02,0,1.41,.2,.2,.45,.29,.71,.29s.51-.1,.71-.29l3-3c.39-.39,.39-1.02,0-1.41Zm-15,3l-3-3c-.39-.39-1.02-.39-1.41,0s-.39,1.02,0,1.41l3,3c.2,.2,.45,.29,.71,.29s.51-.1,.71-.29c.39-.39,.39-1.02,0-1.41Z"/></svg>

);
