import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsMockup = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M13,14l10,3.42-4.47,2.11-2.11,4.47-3.42-10Zm-2-6H7v4h3v-1h1v-3Zm-4,6v4h4v-3h-1v-1h-3Zm10-2v-4h-4v3h1v1h3ZM14.15,0l-.19,1.29c-.14,.98-.99,1.71-1.97,1.71s-1.82-.74-1.96-1.71l-.19-1.29H0V7.43l2,1v15.57H14.31s-1.08-3-1.08-3H5s0-14.43,0-14.43l-2-1V3H7.43c.78,1.78,2.56,3,4.57,3s3.79-1.22,4.57-3h4.43v2.57l-2,1v7.41s3,1.05,3,1.05v-6.61s2-1,2-1V0H14.15Z"/></svg>

);
