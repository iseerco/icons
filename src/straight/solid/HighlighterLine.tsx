import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const HighlighterLine = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M24,24H4v-2H24v2ZM2.01,11.34v7.23l-1.71,1.71,1.41,1.41,1.71-1.71h7.23L2.01,11.34Zm19.23-3.69l-9.23,10.86L3.5,10.01,14.35,.76c1.19-1.06,2.99-1,4.12,.12l2.66,2.66c1.12,1.12,1.18,2.93,.12,4.12Z"/></svg>

);
