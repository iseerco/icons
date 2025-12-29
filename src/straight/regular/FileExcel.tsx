import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FileExcel = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M14.41,0H5c-1.65,0-3,1.35-3,3V24H22V7.59L14.41,0Zm.59,3.41l3.59,3.59h-3.59V3.41Zm5,18.59H4V3c0-.55,.45-1,1-1H13v7h7v13ZM12,13.59l1.6-2.59h2.35l-2.77,4.5,2.77,4.5h-2.35l-1.6-2.59-1.6,2.59h-2.35l2.77-4.5-2.77-4.5h2.35l1.6,2.59Z"/></svg>

);
