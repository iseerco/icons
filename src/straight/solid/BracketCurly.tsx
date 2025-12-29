import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const BracketCurly = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M16,24h-4c-1.65,0-3-1.35-3-3v-5.59l-3.41-3.41,3.41-3.41V3c0-1.65,1.35-3,3-3h4V2h-4c-.55,0-1,.45-1,1v6.41l-2.59,2.59,2.59,2.59v6.41c0,.55,.45,1,1,1h4v2Z"/></svg>

);
