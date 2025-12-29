import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FileCircleInfo = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M18,12c-3.31,0-6,2.69-6,6s2.69,6,6,6,6-2.69,6-6-2.69-6-6-6Zm1,9h-2v-3h2v3Zm0-4h-2v-2h2v2Zm-1.59-12h-4.41V.59l4.41,4.41Zm-6.34,17H0V3C0,1.34,1.34,0,3,0H11V7h7v3c-4.42,0-8,3.58-8,8,0,1.46,.4,2.82,1.08,4Z"/></svg>

);
