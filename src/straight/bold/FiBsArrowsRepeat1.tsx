import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsArrowsRepeat1 = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M11,16v-4.5l-1.5,1.5-1.5-1.5,3.788-3.5h2.212v8h-3Zm-3-10h12v3l3.707-3.793c.39-.39,.39-1.024,0-1.414l-3.707-3.793V3H8C3.589,3,0,6.589,0,11H3c0-2.757,2.243-5,5-5Zm8,12H4v-3L.293,18.793c-.39,.391-.39,1.024,0,1.414l3.707,3.793v-3h12c4.411,0,8-3.589,8-8h-3c0,2.757-2.243,5-5,5Z"/></svg>

);
