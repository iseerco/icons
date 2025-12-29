import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiTsW = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M8.502,22.844l3.499-7.994,3.594,8.19c.373,.674,1.196,1.057,2.021,.936,.847-.134,1.497-.763,1.655-1.592L24.005,0h-1.022l-4.692,22.187c-.081,.426-.399,.732-.828,.801-.41,.059-.821-.12-.973-.391l-4.491-10.239-4.395,10.047c-.244,.448-.621,.656-1.07,.582-.422-.066-.747-.381-.83-.811L1.045,0H.023L4.725,22.372c.161,.841,.81,1.47,1.653,1.602,.108,.018,.215,.026,.321,.026,.734,0,1.401-.413,1.803-1.156Z"/></svg>

);
