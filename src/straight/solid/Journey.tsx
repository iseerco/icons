import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const Journey = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m1,16.5c0-1.381,1.119-2.5,2.5-2.5s2.5,1.119,2.5,2.5-1.119,2.5-2.5,2.5-2.5-1.119-2.5-2.5ZM20.034,4l-1.078-4h-.889l-1.08,4h-3.987v.845l3.046,1.694-1.195,3.736.661.498,3.002-2.321,2.989,2.311.688-.479-1.215-3.693,3.025-1.75v-.841h-3.966ZM5,20h-3c-1.103,0-2,.897-2,2v2h7v-2c0-1.103-.897-2-2-2Zm15-6h-9c-1.103,0-2-.897-2-2s.897-2,2-2h1.824l.647-2h-2.471c-2.206,0-4,1.794-4,4s1.794,4,4,4h9c1.103,0,2,.897,2,2s-.897,2-2,2h-11.537c.341.589.537,1.272.537,2h11c2.206,0,4-1.794,4-4s-1.794-4-4-4Z"/>
</svg>

);
