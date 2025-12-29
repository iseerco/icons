import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const Vault = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M24,5c0-1.65-1.35-3-3-3H3C1.35,2,0,3.35,0,5V22H2v2h2v-2H20v2h2v-2h2V5Zm-2,15H2v-3h2v-2H2v-6h2v-2H2v-2c0-.55,.45-1,1-1H21c.55,0,1,.45,1,1v15ZM13,6c-3.31,0-6,2.69-6,6s2.69,6,6,6,6-2.69,6-6-2.69-6-6-6Zm0,10c-2.21,0-4-1.79-4-4s1.79-4,4-4c1.86,0,3.41,1.28,3.86,3h-2.86v2h2.86c-.45,1.72-2,3-3.86,3Z"/></svg>

);
