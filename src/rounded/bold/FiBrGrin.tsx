import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBrGrin = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M12,0A12.013,12.013,0,0,0,0,12c.6,15.9,23.4,15.893,24,0A12.013,12.013,0,0,0,12,0Zm0,21a9.01,9.01,0,0,1-9-9C3.452.077,20.549.08,21,12A9.01,9.01,0,0,1,12,21ZM6,9a2,2,0,0,1,4,0A2,2,0,0,1,6,9Zm8,0a2,2,0,0,1,4,0A2,2,0,0,1,14,9Zm3.848,5.542A6.824,6.824,0,0,1,12.007,18a6.84,6.84,0,0,1-5.849-3.458,1,1,0,0,1,1.053-1.518A15.4,15.4,0,0,0,12,14a15.4,15.4,0,0,0,4.793-.976A1,1,0,0,1,17.848,14.542Z"/></svg>

);
