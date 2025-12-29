import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const ChessBishop = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M21,15c0-4.688-5.979-9.863-7.85-11.368A2,2,0,1,0,10.807,3.6C8.814,4.987,3,9.511,3,15a8.983,8.983,0,0,0,3.356,7H3v2H21V22H17.645A8.985,8.985,0,0,0,21,15ZM5,15c0-4.485,5.2-8.526,6.958-9.765a33.548,33.548,0,0,1,3.418,3.194l-3.957,4.946,1.562,1.25L16.7,9.977C18,11.641,19,13.432,19,15A7,7,0,0,1,5,15Z"/></svg>

);
