import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsScreenPlay = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="M20.5,0H3.5C1.57,0,0,1.57,0,3.5v13.5H24V3.5c0-1.93-1.57-3.5-3.5-3.5Zm.5,14H3V3.5c0-.276,.224-.5,.5-.5H20.5c.276,0,.5,.224,.5,.5V14Zm-10.5,7.5c0,1.381-1.119,2.5-2.5,2.5s-2.5-1.119-2.5-2.5,1.119-2.5,2.5-2.5,2.5,1.119,2.5,2.5Zm1.589-1.5h11.911v3H12.089c.168-.471,.276-.971,.276-1.5s-.108-1.029-.276-1.5Zm-8.178,0c-.168,.471-.276,.971-.276,1.5s.108,1.029,.276,1.5H0v-3H3.911ZM9,5.167l6,3.333-6,3.333V5.167Z"/>
</svg>

);
