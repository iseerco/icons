import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const DocumentGavel = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="M22.562,23.976l1.414-1.414-4.225-4.226,1.432-1.432,.537,.537,1.414-1.414-5.312-5.312-1.414,1.414,.537,.537-4.369,4.369-.537-.537-1.414,1.414,5.312,5.312,1.414-1.414-.537-.537,1.523-1.523,4.225,4.226Zm-3.147-18.976h-4.414V.586l4.414,4.414Zm-5.531,19H0V3C0,1.343,1.343,0,3,0H13V7h7v3.065l-2.178-2.178L7.796,17.913l6.087,6.087Z"/>
</svg>

);
