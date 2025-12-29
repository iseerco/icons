import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const RoadSignLeft = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m23.052,9.703L14.297.948c-1.223-1.222-3.368-1.222-4.591,0L.951,9.702c-.613.613-.951,1.429-.951,2.296s.338,1.683.951,2.295l8.755,8.756c.633.633,1.464.949,2.295.949s1.663-.316,2.296-.949l8.755-8.755c.613-.613.951-1.429.951-2.296s-.338-1.683-.951-2.295Zm-7.052,5.797l-2,2v-4.5c0-.552-.448-1-1-1h-4.097l2.304,2.293-1.414,1.414-3.301-3.301c-.774-.775-.774-2.037,0-2.812l3.302-3.301,1.414,1.414-2.293,2.293h4.086c1.654,0,3,1.346,3,3v2.5Z"/>
</svg>

);
