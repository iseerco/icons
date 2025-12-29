import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const PageBreak = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M20,17h2v7H2v-7h2v5H20v-5ZM4,11H2V3C2,1.346,3.346,0,5,0H14.414l7.586,7.586v3.414h-2v-2h-7V2H5c-.552,0-1,.448-1,1V11ZM15,7h3.586l-3.586-3.586v3.586ZM7,13H1v2H7v-2Zm2,2h6v-2h-6v2Zm8-2v2h6v-2h-6Z"/></svg>

);
