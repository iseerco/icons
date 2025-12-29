import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiTsNoteSticky = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M21.5,0H2.5C1.12,0,0,1.12,0,2.5V24H17.71l6.29-6.29V2.5c0-1.38-1.12-2.5-2.5-2.5ZM1,2.5c0-.83,.67-1.5,1.5-1.5H21.5c.83,0,1.5,.67,1.5,1.5v14.5h-6v6H1V2.5Zm21.29,15.5l-4.29,4.29v-4.29h4.29Z"/></svg>

);
