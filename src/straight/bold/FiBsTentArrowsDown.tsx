import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsTentArrowsDown = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m12,6.018L2.427,19.593c-.554.908-.573,2.003-.053,2.93.524.934,1.523,1.514,2.606,1.514h14.038c1.083,0,2.082-.58,2.606-1.514.521-.927.501-2.021-.082-2.977L12,6.018Zm3.261,15.024l-3.261-4.542-3.268,4.553-3.679.006,6.947-9.597,6.934,9.575-3.672.006Zm-.261-16.042h3V0h3v5h3l-3.793,3.707c-.391.391-1.024.391-1.414,0l-3.793-3.707ZM0,5h3V0h3v5h3l-3.793,3.707c-.391.391-1.024.391-1.414,0L0,5Z"/>
</svg>

);
