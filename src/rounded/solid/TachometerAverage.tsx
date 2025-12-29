import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const TachometerAverage = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M20,4.052C8.353-5.659-6.712,9.5,3.138,21.081A2.318,2.318,0,0,0,7.1,20.616c.347-.519.682-1.687,1.486-1.616h6.824c.8-.074,1.161,1.129,1.5,1.646A2.367,2.367,0,0,0,19,22a2.734,2.734,0,0,0,1.814-.867A12.058,12.058,0,0,0,20,4.052ZM12,15a2.008,2.008,0,0,1-1-3.732V6a1,1,0,0,1,2,0v5.268A2.008,2.008,0,0,1,12,15Z"/></svg>

);
