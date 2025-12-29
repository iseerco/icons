import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const ArrowAltSquareDown = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M13,13h4l-4.236,4.629c-.443,.494-1.217,.494-1.66,0l-4.236-4.629h4.132V6h2v7ZM24,3V24H0V3C0,1.346,1.346,0,3,0H21c1.654,0,3,1.346,3,3Zm-2,0c0-.551-.449-1-1-1H3c-.551,0-1,.449-1,1V22H22V3Z"/></svg>

);
