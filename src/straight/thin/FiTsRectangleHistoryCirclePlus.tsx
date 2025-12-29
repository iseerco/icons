import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiTsRectangleHistoryCirclePlus = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m18,1H6V0h12v1Zm3,4H3v1h18v-1Zm3,12.5c0,3.584-2.916,6.5-6.5,6.5s-6.5-2.916-6.5-6.5,2.916-6.5,6.5-6.5,6.5,2.916,6.5,6.5Zm-1,0c0-3.032-2.467-5.5-5.5-5.5s-5.5,2.468-5.5,5.5,2.467,5.5,5.5,5.5,5.5-2.468,5.5-5.5Zm-5-3h-1v2.5h-2.5v1h2.5v2.5h1v-2.5h2.5v-1h-2.5v-2.5ZM1,23v-10.5c0-.827.673-1.5,1.5-1.5h9.528c.454-.382.947-.718,1.474-1H2.5c-1.378,0-2.5,1.121-2.5,2.5v11.5h12.028c-.362-.305-.696-.64-1.003-1H1Z"/>
</svg>

);
