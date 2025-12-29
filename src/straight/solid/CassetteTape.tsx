import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const CassetteTape = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M16.41,19.02l1.08,1.98H6.51l1.08-1.98h8.81Zm-2.22-9.02h-4.37c.11,.31,.18,.65,.18,1s-.07,.69-.18,1h4.37c-.11-.31-.18-.65-.18-1s.07-.69,.18-1Zm-7.18,0c-.55,0-1,.45-1,1s.45,1,1,1,1-.45,1-1-.45-1-1-1ZM24,6v15h-4.24l-2.17-3.98H6.41l-2.17,3.98H0V6c0-1.65,1.35-3,3-3H21c1.65,0,3,1.35,3,3Zm-4,5c0-1.65-1.35-3-3-3H7c-1.65,0-3,1.35-3,3s1.35,3,3,3h10c1.65,0,3-1.35,3-3Zm-3-1c-.55,0-1,.45-1,1s.45,1,1,1,1-.45,1-1-.45-1-1-1Z"/></svg>

);
