import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiTsPaste = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M2.5,3h2.55c.23,1.14,1.24,2,2.45,2h3c1.21,0,2.22-.86,2.45-2h2.55c.83,0,1.5,.67,1.5,1.5v3.5h1v-3.5c0-1.38-1.12-2.5-2.5-2.5h-2.55c-.23-1.14-1.24-2-2.45-2h-3c-1.21,0-2.22,.86-2.45,2H2.5C1.12,2,0,3.12,0,4.5V24H10v-1H1V4.5c0-.83,.67-1.5,1.5-1.5ZM7.5,1h3c.83,0,1.5,.67,1.5,1.5s-.67,1.5-1.5,1.5h-3c-.83,0-1.5-.67-1.5-1.5s.67-1.5,1.5-1.5Zm14,9h-7c-1.38,0-2.5,1.12-2.5,2.5v11.5h12V12.5c0-1.38-1.12-2.5-2.5-2.5Zm1.5,13H13V12.5c0-.83,.67-1.5,1.5-1.5h7c.83,0,1.5,.67,1.5,1.5v10.5ZM15,14h6v1h-6v-1Zm0,4h6v1h-6v-1Z"/></svg>

);
