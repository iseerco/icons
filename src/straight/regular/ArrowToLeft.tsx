import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const ArrowToLeft = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M24,11H4.324l4.3-4.3L7.213,5.282l-4.95,4.95A2.578,2.578,0,0,0,2,10.553V5H0V19H2V13.447a2.578,2.578,0,0,0,.263.321l4.95,4.95L8.627,17.3,4.324,13H24Z"/></svg>

);
