import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const BarberPole = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m19,6v-2h-1.35c-.826-2.327-3.043-4-5.65-4s-4.824,1.673-5.65,4h-1.35v2h1v12h-1v2h1.35c.826,2.327,3.043,4,5.65,4s4.824-1.673,5.65-4h1.35v-2h-1V6h1Zm-7-4c1.474,0,2.75.81,3.444,2h-6.887c.694-1.19,1.97-2,3.444-2Zm-1.914,4l5.914,5.914v2.672L8,6.586v-.586h2.086Zm-2.086,8.914l3.086,3.086h-3.086v-3.086Zm4,7.086c-1.474,0-2.75-.81-3.444-2h6.887c-.694,1.19-1.97,2-3.444,2Zm1.914-4l-5.914-5.914v-2.672l8,8v.586h-2.086Zm2.086-8.914l-3.086-3.086h3.086v3.086Z"/>
</svg>

);
