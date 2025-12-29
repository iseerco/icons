import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const VolumeMute = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m2,6c-1.103,0-2,.897-2,2v8c0,1.103.897,2,2,2h2.644l7.356,6.013V.037l-7.354,5.963h-2.646Zm8-1.767v15.562l-4.644-3.795h-3.356v-8h3.354l4.646-3.767Zm10.439,7.767l3.293,3.293-1.414,1.414-3.293-3.293-3.293,3.293-1.414-1.414,3.293-3.293-3.293-3.293,1.414-1.414,3.293,3.293,3.293-3.293,1.414,1.414-3.293,3.293Z"/></svg>

);
