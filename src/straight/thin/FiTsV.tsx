import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiTsV = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M1.997,0L11.39,22.521c.151,.304,.433,.479,.773,.479,.367,0,.636-.199,.711-.343L22.008,0h1.078L13.783,23.072c-.289,.563-.926,.928-1.622,.928-.722,0-1.345-.386-1.681-1.063L.914,0H1.997Z"/></svg>

);
