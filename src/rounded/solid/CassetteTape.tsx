import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const CassetteTape = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M6,11c0-.55,.45-1,1-1s1,.45,1,1-.45,1-1,1-1-.45-1-1Zm1.54,8l-1.33,2h11.6l-1.33-2H7.54Zm2.28-7h4.37c-.11-.31-.18-.65-.18-1s.07-.69,.18-1h-4.37c.11,.31,.18,.65,.18,1s-.07,.69-.18,1Zm14.18-4v8c0,2.37-1.67,4.36-3.89,4.87l-2.28-3.42c-.19-.28-.5-.45-.83-.45H7c-.33,0-.65,.17-.83,.45l-2.28,3.42c-2.22-.51-3.89-2.49-3.89-4.87V8C0,5.24,2.24,3,5,3h14c2.76,0,5,2.24,5,5Zm-4,3c0-1.65-1.35-3-3-3H7c-1.65,0-3,1.35-3,3s1.35,3,3,3h10c1.65,0,3-1.35,3-3Zm-3-1c-.55,0-1,.45-1,1s.45,1,1,1,1-.45,1-1-.45-1-1-1Z"/></svg>

);
