import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiTsGlassWhiskey = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m.022,1l1.833,19.642c.125,1.345,1.238,2.358,2.589,2.358h14.984c1.341,0,2.453-1.006,2.586-2.341l1.967-19.659H.022Zm20.998,19.559c-.083.821-.767,1.441-1.592,1.441H4.444c-.831,0-1.516-.624-1.593-1.451l-.518-5.548h19.242l-.556,5.558Zm.656-6.558H2.24L1.12,2h21.756l-1.2,12.001Z"/></svg>

);
