import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const BlindsRaised = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M22,18.184V5c0-2.761-2.239-5-5-5H5C2.239,0,0,2.239,0,5v14c0,2.761,2.239,5,5,5H15c.552,0,1-.447,1-1s-.448-1-1-1H5c-1.657,0-3-1.343-3-3V10h15c.552,0,1-.448,1-1v-3H2v-2H18v-1.829c1.164,.413,2,1.525,2,2.829v13.184c-1.336,.477-2.245,1.861-1.941,3.416,.23,1.175,1.198,2.131,2.376,2.348,1.902,.349,3.565-1.109,3.565-2.948,0-1.302-.839-2.402-2-2.816Z"/></svg>

);
