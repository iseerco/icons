import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiTrArrowDownFromDottedLine = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M18.36,18.15c.19,.2,.19,.52-.01,.71l-4.59,4.41c-.46,.47-1.09,.73-1.76,.73s-1.3-.26-1.77-.73l-4.58-4.41c-.2-.19-.21-.51-.01-.71s.51-.2,.71-.01l4.59,4.41c.16,.16,.36,.28,.57,.35V4.5c0-.28,.22-.5,.5-.5s.5,.22,.5,.5V22.91c.21-.07,.4-.19,.56-.35l4.59-4.42c.2-.19,.52-.19,.71,.01ZM14,2c.55,0,1-.45,1-1s-.45-1-1-1-1,.45-1,1,.45,1,1,1ZM2,0c-.55,0-1,.45-1,1s.45,1,1,1,1-.45,1-1-.45-1-1-1ZM10,2c.55,0,1-.45,1-1s-.45-1-1-1-1,.45-1,1,.45,1,1,1ZM22,0c-.55,0-1,.45-1,1s.45,1,1,1,1-.45,1-1-.45-1-1-1Zm-4,0c-.55,0-1,.45-1,1s.45,1,1,1,1-.45,1-1-.45-1-1-1ZM7,1c0-.55-.45-1-1-1s-1,.45-1,1,.45,1,1,1,1-.45,1-1Z"/></svg>

);
