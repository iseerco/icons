import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsTentArrowTurnLeft = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m18.5,2.982H4V-.018L.293,3.775c-.39.39-.39,1.024,0,1.414l3.707,3.793v-3h14.5c1.379,0,2.5,1.122,2.5,2.5v4.518h3v-4.518c0-3.033-2.468-5.5-5.5-5.5Z"/>
  <path d="m12,6L2.427,19.574c-.554.908-.573,2.004-.053,2.931.524.934,1.523,1.514,2.606,1.514h14.039c1.083,0,2.082-.58,2.606-1.515.521-.927.501-2.022-.082-2.977L12,6Zm3.262,15.024l-3.262-4.524-3.268,4.534-3.679.006,6.947-9.597,6.935,9.576-3.673.006Z"/>
</svg>

);
