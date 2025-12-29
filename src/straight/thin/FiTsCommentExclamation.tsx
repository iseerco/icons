import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiTsCommentExclamation = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M24,24H12C5.383,24,0,18.617,0,12S5.383,0,12,0s12,5.383,12,12v12ZM12,1C5.935,1,1,5.935,1,12s4.935,11,11,11h11V12c0-6.065-4.935-11-11-11Zm.5,4h-1V15h1V5Zm-.5,12c-.552,0-1,.448-1,1s.448,1,1,1,1-.448,1-1-.448-1-1-1Z"/></svg>

);
