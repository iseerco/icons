import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const CommentExclamation = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M24,24H12C5.383,24,0,18.617,0,12S5.383,0,12,0s12,5.383,12,12v12ZM12,2C6.486,2,2,6.486,2,12s4.486,10,10,10h10V12c0-5.514-4.486-10-10-10Zm1,3h-2V15h2V5Zm0,12h-2v2h2v-2Z"/></svg>

);
