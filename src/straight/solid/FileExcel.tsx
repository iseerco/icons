import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FileExcel = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M21.41,5h-4.41V.59l4.41,4.41Zm.59,2V24H2V3C2,1.34,3.34,0,5,0H15V7h7ZM13.17,15.5l2.77-4.5h-2.35l-1.6,2.59-1.6-2.59h-2.35l2.77,4.5-2.77,4.5h2.35l1.6-2.59,1.6,2.59h2.35l-2.77-4.5Z"/></svg>

);
