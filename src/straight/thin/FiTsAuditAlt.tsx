import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiTsAuditAlt = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m14,5v1H4v-1h10Zm-8,5h6v-1h-6v1Zm17,5.882v5.618c0,1.378-1.121,2.5-2.5,2.5H1V0h17.5c1.379,0,2.5,1.122,2.5,2.5v9.382l2,4Zm-7,7.118V1H2v22h14Zm6-6.882l-2-4V2.5c0-.827-.673-1.5-1.5-1.5h-1.5v22h3.5c.827,0,1.5-.673,1.5-1.5v-5.382Z"/>
</svg>

);
