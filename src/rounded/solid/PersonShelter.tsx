import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const PersonShelter = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m11,24v-4h2v4h-2Zm4-10c0-1.103-.897-2-2-2h-2c-1.103,0-2,.897-2,2v2c0,1.103.897,2,2,2h2c1.103,0,2-.897,2-2v-2Zm9-4.316v9.316c0,2.757-2.243,5-5,5h-4v-4.556c1.19-.694,2-1.97,2-3.444v-2c0-2.206-1.794-4-4-4h-2c-2.206,0-4,1.794-4,4v2c0,1.474.81,2.75,2,3.444v4.556h-4c-2.757,0-5-2.243-5-5v-9.316c0-1.665.824-3.214,2.203-4.145L9.203.816c1.699-1.146,3.895-1.147,5.594,0l7,4.723c1.379.931,2.203,2.48,2.203,4.145Zm-9.5-3.184c0-1.381-1.119-2.5-2.5-2.5s-2.5,1.119-2.5,2.5,1.119,2.5,2.5,2.5,2.5-1.119,2.5-2.5Z"/>
</svg>

);
