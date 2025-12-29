import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBrCaretCircleRight = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M24,12A12,12,0,1,1,12,0,12.013,12.013,0,0,1,24,12ZM3,12a9,9,0,1,0,9-9A9.011,9.011,0,0,0,3,12Zm8.6,5.731,5.154-5.087a.9.9,0,0,0,0-1.288L11.6,6.269a.924.924,0,0,0-1.575.644V17.087A.924.924,0,0,0,11.6,17.731Z"/></svg>

);
