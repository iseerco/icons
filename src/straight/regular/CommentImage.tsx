import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const CommentImage = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M24,24H12C5.383,24,0,18.617,0,12S5.383,0,12,0s12,5.383,12,12v12ZM12,2C6.486,2,2,6.486,2,12s4.486,10,10,10h10V12c0-5.514-4.486-10-10-10ZM6.5,7c-.828,0-1.5,.672-1.5,1.5s.672,1.5,1.5,1.5,1.5-.672,1.5-1.5-.672-1.5-1.5-1.5Zm8.5,6.586l-4-4-6.095,6.095c.316,.606,.708,1.163,1.162,1.666l4.933-4.933,4,4,4.972-4.972c-.056-.811-.233-1.587-.514-2.314l-4.458,4.458Z"/></svg>

);
