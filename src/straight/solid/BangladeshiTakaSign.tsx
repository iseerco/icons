import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const BangladeshiTakaSign = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M22,11v3c0,5.51-4.49,10-10,10h-3c-1.65,0-3-1.35-3-3V10H2v-2H6V3c0-.55-.45-1-1-1H2V0h3c1.65,0,3,1.35,3,3v5h4v2h-4v11c0,.55,.45,1,1,1h3c4.41,0,8-3.59,8-8v-3c0-.55-.45-1-1-1h-3v-2h3c1.65,0,3,1.35,3,3Z"/></svg>

);
