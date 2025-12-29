import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsHelmetBattle = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m12.723.417l-.723-.397-.723.397c-.949.522-9.277,5.256-9.277,10.682v8.791l10,4.118,10-4.118v-8.791C22,5.673,13.672.938,12.723.417Zm6.277,17.464l-5.5,2.265v-5.395l3.5-1.75v-3H7v3l3.5,1.75v5.395l-5.5-2.265v-6.782c0-2.551,4.031-5.848,7-7.635,2.969,1.788,7,5.084,7,7.635v6.782Z"/>
</svg>

);
