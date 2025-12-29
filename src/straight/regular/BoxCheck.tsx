import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const BoxCheck = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M6.112,15.526l1.394-1.436,2.984,2.898,5.808-5.701,1.404,1.424-5.793,5.707c-.386,.387-.896,.581-1.407,.581s-1.025-.195-1.416-.586l-2.974-2.888Zm17.888-6.526h-1v15H1V9H0V3C0,1.346,1.346,0,3,0H21c1.654,0,3,1.346,3,3v6ZM2,7H22V3c0-.552-.448-1-1-1H3c-.551,0-1,.448-1,1V7Zm19,2H3v13H21V9Z"/></svg>

);
