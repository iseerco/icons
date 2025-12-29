import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const Inboxes = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M16,15c0,1.1-.9,2-2,2h-4c-1.1,0-2-.9-2-2v-2H0v8c0,1.65,1.35,3,3,3H21c1.65,0,3-1.35,3-3V13h-8v2Zm2,0h4v6c0,.55-.45,1-1,1H3c-.55,0-1-.45-1-1v-6H6c0,2.21,1.79,4,4,4h4c2.21,0,4-1.79,4-4ZM16,0V2c0,1.1-.9,2-2,2h-4c-1.1,0-2-.9-2-2V0H0V8c0,1.65,1.35,3,3,3H21c1.65,0,3-1.35,3-3V0h-8Zm6,8c0,.55-.45,1-1,1H3c-.55,0-1-.45-1-1V2H6c0,2.21,1.79,4,4,4h4c2.21,0,4-1.79,4-4h4v6Z"/></svg>

);
