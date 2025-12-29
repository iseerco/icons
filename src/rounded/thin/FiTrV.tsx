import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiTrV = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M12,24.011c-1.662,0-3.071-.961-3.679-2.508L.036,.685C-.067,.429,.059,.138,.315,.035c.259-.099,.548,.023,.649,.28L9.251,21.136c1.113,2.535,4.383,2.536,5.497,.002L23.036,.315c.102-.257,.391-.379,.649-.28,.256,.103,.382,.394,.279,.649L15.678,21.505c-.606,1.545-2.016,2.506-3.678,2.506Z"/></svg>

);
