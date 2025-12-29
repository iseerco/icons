import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiTsTextHeight = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M11,1V24h-1V1H2.5c-.83,0-1.5,.67-1.5,1.5v1.5H0v-1.5C0,1.12,1.12,0,2.5,0H18.5c1.38,0,2.5,1.12,2.5,2.5v1.5h-1v-1.5c0-.83-.67-1.5-1.5-1.5h-7.5Zm9,21.71V8.29l3.15,3.15,.71-.71-3.29-3.29c-.58-.58-1.54-.58-2.12,0l-3.29,3.29,.71,.71,3.15-3.15v14.41l-3.15-3.15-.71,.71,3.29,3.29c.29,.29,.68,.44,1.06,.44s.77-.15,1.06-.44l3.29-3.29-.71-.71-3.15,3.15Z"/></svg>

);
