import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const ArrowsRetweet = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M24,15.87l-3.51,3.51c-.4,.4-.92,.62-1.49,.62s-1.09-.22-1.49-.62l-3.48-3.48,1.41-1.41,2.55,2.55V7c0-.55-.45-1-1-1h-6.3l-2-2h8.3c1.65,0,3,1.35,3,3v10.04l2.59-2.59,1.41,1.41Zm-17,2.13c-.55,0-1-.45-1-1V6.96l2.55,2.55,1.41-1.41-3.48-3.48c-.79-.79-2.18-.79-2.97,0L0,8.13l1.41,1.41,2.59-2.59v10.04c0,1.65,1.35,3,3,3H15.3l-2-2H7Z"/></svg>

);
