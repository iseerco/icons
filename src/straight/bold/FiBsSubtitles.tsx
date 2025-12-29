import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsSubtitles = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M21,2H3A3,3,0,0,0,0,5V22H24V5A3,3,0,0,0,21,2Zm0,17H3V5H21Z"/><rect x="10" y="9" width="9" height="3"/><rect x="5" y="9" width="3" height="3"/><rect x="5" y="14" width="9" height="3"/><rect x="16" y="14" width="3" height="3"/></svg>

);
