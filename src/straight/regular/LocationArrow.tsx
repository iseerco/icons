import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const LocationArrow = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m1.886,8.437c-1.328.484-2.085,1.795-1.841,3.189.245,1.397,1.407,2.374,2.826,2.374h7.129v7.128c0,1.419.976,2.582,2.374,2.827.175.03.349.046.521.046,1.192,0,2.249-.727,2.666-1.878L24.028-.014,1.886,8.437Zm11.801,12.988c-.229.635-.797.59-.967.561-.169-.03-.72-.18-.72-.857v-9.128H2.871c-.678,0-.826-.551-.856-.72-.029-.168-.076-.736.561-.967L20.562,3.449l-6.875,17.976Z"/>
</svg>

);
