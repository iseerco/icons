import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const LegalCase = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="M19.414,5h-4.414V.586l4.414,4.414ZM7.796,17.913l6.087,6.087H0V3C0,1.343,1.343,0,3,0H13V7h7v3.065l-2.178-2.178-3.113,3.113H4v2H12.709l-2,2H4v2h4.709l-.913,.913Zm-3.796-8.913h5v-2H4v2Zm15.751,9.336l1.432-1.432,.537,.537,1.414-1.414-5.312-5.312-1.414,1.414,.537,.537-4.369,4.369-.537-.537-1.414,1.414,5.312,5.312,1.414-1.414-.537-.537,1.523-1.523,4.225,4.226,1.414-1.414-4.225-4.226Z"/>
</svg>

);
