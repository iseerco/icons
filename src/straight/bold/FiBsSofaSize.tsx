import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsSofaSize = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m.256,4.074c-.341-.306-.341-.841,0-1.147L3,0v2h18V0l2.744,2.926c.341.306.341.841,0,1.147l-2.744,2.926v-2H3v2L.256,4.074Zm21.744,8.926h2v9h-2v2h-3v-2H5v2h-3v-2H0v-9h2v-1.5c0-2.481,2.019-4.5,4.5-4.5h11c2.481,0,4.5,2.019,4.5,4.5v1.5Zm-3-1.5c0-.827-.673-1.5-1.5-1.5H6.5c-.827,0-1.5.673-1.5,1.5v5.5h14v-5.5Z"/>
</svg>

);
