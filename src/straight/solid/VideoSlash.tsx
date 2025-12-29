import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const VideoSlash = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M24,4.086v15.828l-3-3V7.086l3-3Zm-5,13.5l4.957,4.957-1.414,1.414L.042,1.457,1.457,.043l3.957,3.957h10.586c1.654,0,3,1.346,3,3v10.586ZM.77,5.013c-.473,.531-.77,1.222-.77,1.987v13H15.757L.77,5.013Z"/></svg>

);
