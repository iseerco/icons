import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiTrArrowFromRight = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M23.5,5c-.276,0-.5,.224-.5,.5v6H1.091c.074-.208,.188-.4,.349-.561L6.525,5.854c.195-.195,.195-.512,0-.707s-.512-.195-.707,0L.732,10.232c-.472,.472-.732,1.1-.732,1.768s.26,1.295,.732,1.768l5.085,5.086c.098,.098,.226,.146,.354,.146s.256-.049,.354-.146c.195-.195,.195-.512,0-.707L1.439,13.061c-.16-.16-.275-.353-.348-.561H23v6c0,.276,.224,.5,.5,.5s.5-.224,.5-.5V5.5c0-.276-.224-.5-.5-.5Z"/></svg>

);
