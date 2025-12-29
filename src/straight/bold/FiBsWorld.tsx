import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsWorld = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M12,0A12,12,0,1,0,24,12,12.013,12.013,0,0,0,12,0Zm0,21V16.693a.875.875,0,0,0-.875-.875H6.75L3,12.072c0-.024,0-.048,0-.072A8.989,8.989,0,0,1,17.6,4.967l-.351.351H13.909V9.136H11.045V12.08a.875.875,0,0,0,.875.875h5.807V13.9a5.976,5.976,0,0,0,1.3,3.712A8.983,8.983,0,0,1,12,21Z"/></svg>

);
