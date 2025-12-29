import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const BoxCheck = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M21,0H3C1.343,0,0,1.343,0,3v5H24V3c0-1.657-1.343-3-3-3ZM1,10v14H23V10H1Zm10.909,10.419c-.386,.387-.896,.581-1.407,.581s-1.025-.195-1.416-.586l-2.974-2.888,1.394-1.436,2.984,2.898,5.808-5.701,1.404,1.424-5.793,5.707Z"/></svg>

);
