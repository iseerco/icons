import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiTrBracketCurly = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M14.5,24h-1c-2.48,0-4.5-2.02-4.5-4.5v-2.84c0-.93-.36-1.81-1.02-2.47l-1.83-1.83c-.2-.2-.2-.51,0-.71l1.83-1.83c.66-.66,1.02-1.54,1.02-2.47v-2.84c0-2.48,2.02-4.5,4.5-4.5h1c.28,0,.5,.22,.5,.5s-.22,.5-.5,.5h-1c-1.93,0-3.5,1.57-3.5,3.5v2.84c0,1.2-.47,2.33-1.32,3.18l-1.48,1.48,1.48,1.48c.85,.85,1.32,1.98,1.32,3.18v2.84c0,1.93,1.57,3.5,3.5,3.5h1c.28,0,.5,.22,.5,.5s-.22,.5-.5,.5Z"/></svg>

);
