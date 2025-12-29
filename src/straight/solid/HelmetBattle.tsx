import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const HelmetBattle = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m16,12.903l-4,2.16-4-2.16v-.903h8v.903ZM12.481.244l-.481-.265-.481.265c-.975.536-9.519,5.388-9.519,10.794v8.809l9,3.705v-6.757l-5-2.699v-4.097h12v4.097l-5,2.699v6.757l9-3.705v-8.809C22,5.632,13.456.779,12.481.244Z"/>
</svg>

);
