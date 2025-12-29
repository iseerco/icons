import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsChoose = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m24,18.253v5.747h-3v-3.483l-6-1.714v5.198h-3l-3.766-2.891c-.866-.722-.983-2.008-.261-2.874.722-.866,2.008-.983,2.874-.261l1.152.835-.013-7.388c0-.911.799-1.632,1.739-1.479.737.12,1.273.812,1.273,1.56v4.182l9,2.571ZM8,8H0V0h8v8Zm-3-5h-2v2h2v-2Zm3,15H0v-8h8v8Zm-3-5h-2v2h2v-2ZM18,0h-8v8h8V0Z"/>
</svg>

);
