import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsDownLeftAndUpRightToCenter = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M10.998,14.411l-.334,7.522-3.238-3.238-5.278,5.278L.026,21.852l5.278-5.278-3.238-3.238,7.522-.334c.795-.043,1.452,.614,1.409,1.409ZM23.983,2.138L21.862,.017l-5.288,5.288-3.238-3.238-.334,7.522c-.043,.795,.614,1.452,1.409,1.409l7.522-.334-3.238-3.238,5.288-5.288Z"/></svg>

);
