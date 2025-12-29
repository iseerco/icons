import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const EarthAmericas = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m12,0C5.369,0-.025,5.383-.025,12s5.383,12,12,12,12-5.383,12-12S18.603,0,12,0Zm1,19h-2v-4l-2-2v-2l-1-1h-3l-2.096-2.203c1.595-3.42,5.072-5.797,9.096-5.797.207,0,.412.007.616.02-.878,1.333-1.616,2.48-1.616,2.48l1.5,2.5-1,1-2-1-1.5,1.5,1.5,1.5h2.5l4,2.5-3,6.5Zm6-7l-1-4,2.401-1.386c.996,1.555,1.573,3.404,1.573,5.386,0,.484-.035.96-.102,1.426l-2.872-1.426Z"/></svg>

);
