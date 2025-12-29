import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiTsBlueberries = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m17,6v2h-1v-2h-2v-1h2v-2h1v2h2v1h-2Zm-1,10c0,4.411-3.589,8-8,8S0,20.411,0,16s3.589-8,8-8,8,3.589,8,8Zm-1,0c0-3.86-3.14-7-7-7s-7,3.14-7,7,3.14,7,7,7,7-3.14,7-7Zm-6-5h-1v2h-2v1h2v2h1v-2h2v-1h-2v-2ZM15.5,0c-3.829,0-7.072,2.545-8.132,6.032.21-.013.419-.032.632-.032.145,0,.286.016.43.022,1.027-2.92,3.804-5.022,7.07-5.022,4.136,0,7.5,3.364,7.5,7.5,0,3.266-2.102,6.044-5.022,7.07.006.143.022.285.022.43,0,.213-.019.422-.032.632,3.487-1.06,6.032-4.303,6.032-8.132C24,3.813,20.187,0,15.5,0Z"/>
</svg>

);
