import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const ClearAlt = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m18,0c-3.314,0-6,2.686-6,6s2.686,6,6,6,6-2.686,6-6S21.314,0,18,0Zm3.536,8.121l-1.414,1.414-2.121-2.121-2.121,2.121-1.414-1.414,2.121-2.121-2.121-2.121,1.414-1.414,2.121,2.121,2.121-2.121,1.414,1.414-2.121,2.121,2.121,2.121Zm-6.64,5.251l-.895,1.007v9.62l-6-4.5v-5.12L0,5.38v-2.38C0,1.346,1.346,0,3,0h9.726c-1.667,1.467-2.726,3.61-2.726,6,0,3.311,2.022,6.158,4.895,7.373Z"/>
</svg>

);
