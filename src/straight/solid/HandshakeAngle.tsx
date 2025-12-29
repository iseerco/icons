import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const HandshakeAngle = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M7,7s.01,0,.02,0h0c0-2.26,1.5-4.17,3.73-4.74l4.3-1.1,1.28-1.15h7.67V8.92l-2,2.08H13V7h-2v6c0,1.1-.9,2-2,2s-2-.9-2-2V7Zm5.87,7c-.45,1.72-2.01,3-3.87,3-2.21,0-4-1.79-4-4V7.46c-1.33,.61-2.36,1.8-2.74,3.29l-1.26,4.25-1,1.03v7.97H8.08l2.35-2h4.5c2.22-.01,4.19-1.5,4.79-3.63l1.51-5.37H13l-.13,1Z"/></svg>

);
