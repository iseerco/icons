import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const Cream = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M22,12.184V8H20C20,2.56,17.028.291,16.9.2L16.637,0H15V1a1.883,1.883,0,0,1-2,2H10A5.648,5.648,0,0,0,4.089,8H2v4.184A3,3,0,0,0,0,15v9H24V15A3,3,0,0,0,22,12.184ZM10,5h3a4.026,4.026,0,0,0,3.613-2.162A9.083,9.083,0,0,1,18,8H6.131A3.658,3.658,0,0,1,10,5Zm10,5v2H4V10Zm2,12H2V15a1,1,0,0,1,1-1H21a1,1,0,0,1,1,1Z"/></svg>

);
