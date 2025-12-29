import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const PlugCirclePlus = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="M7,16h2v8h-2v-6c-3.309,0-6-2.691-6-6v-4H0v-2H4V0h2V6h5V0h2V6h4v2H3v4c0,2.206,1.794,4,4,4Zm17,1c0,3.859-3.141,7-7,7s-7-3.141-7-7,3.141-7,7-7,7,3.141,7,7Zm-2,0c0-2.757-2.243-5-5-5s-5,2.243-5,5,2.243,5,5,5,5-2.243,5-5Zm-4-3h-2v2h-2v2h2v2h2v-2h2v-2h-2v-2Z"/>
</svg>

);
