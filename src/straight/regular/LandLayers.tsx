import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const LandLayers = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m24,9.637v2.332l-12,7.2L0,11.969v-2.332l12,7.2,12-7.2ZM0,13.968v2.332l12,7.2,12-7.2v-2.332l-12,7.2L0,13.968Zm12,.698L.056,7.5,12,.334l11.944,7.166-11.944,7.166Zm0-2.332l3.078-1.847-3.035-1.821-3.078,1.846,3.035,1.821Zm8.056-4.834l-3.035-1.821-3.035,1.821,3.035,1.821,3.035-1.821ZM12,2.666l-3.035,1.821,3.078,1.846,3.035-1.821-3.078-1.847ZM3.944,7.5l3.077,1.846,3.078-1.846-3.078-1.846-3.077,1.846Z"/>
</svg>

);
