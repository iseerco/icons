import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiTsCommentImage = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M24,24H12C5.383,24,0,18.617,0,12S5.383,0,12,0s12,5.383,12,12v12ZM12,1C5.935,1,1,5.935,1,12s4.935,11,11,11h11V12c0-6.065-4.935-11-11-11Zm-5,7c-.552,0-1,.448-1,1s.448,1,1,1,1-.448,1-1-.448-1-1-1Zm8,5.908l-4-4-6.71,6.71c.175,.292,.366,.572,.572,.842l6.138-6.138,4,4,5.677-5.677c-.098-.362-.213-.717-.354-1.06l-5.323,5.323Z"/></svg>

);
