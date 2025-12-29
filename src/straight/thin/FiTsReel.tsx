import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiTsReel = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M24,1V0H0V1H4V23H0v1H24v-1h-4V14c2.206,0,4-1.794,4-4h-1c0,1.654-1.346,3-3,3V1h4Zm-5,9H5v-2h14v2Zm0,9H5v-2h14v2Zm0-12H5v-2h14v2ZM5,23v-3h14v3H5Zm14-7H5v-2h14v2Zm-14-3v-2h14v2H5ZM19,4H5V1h14v3Z"/></svg>

);
