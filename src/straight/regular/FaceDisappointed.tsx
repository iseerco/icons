import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FaceDisappointed = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M12,0C5.383,0,0,5.383,0,12s5.383,12,12,12,12-5.383,12-12S18.617,0,12,0Zm0,22c-5.514,0-10-4.486-10-10S6.486,2,12,2s10,4.486,10,10-4.486,10-10,10Zm0-6c1.966,0,3.531,1.149,3.598,1.198l-1.195,1.604c-.007-.005-1.113-.802-2.402-.802s-2.396,.797-2.406,.805l-1.191-1.606c.066-.049,1.632-1.198,3.598-1.198Zm-1.661-3.002l-4,1.442-.678-1.881,4-1.442,.678,1.881Zm4-1.881l4,1.442-.678,1.881-4-1.442,.678-1.881Z"/></svg>

);
