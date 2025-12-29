import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FloorLayer = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m12,1.034L0,6.789v5.568l12.002,5.755,11.998-5.794v-5.529L12,1.034Zm0,2.218l8.687,4.166-8.687,4.166L3.313,7.418,12,3.252ZM2,9.007l9,4.315v2.091L2,11.098v-2.091Zm20,2.056l-9,4.345v-2.086l9-4.315v2.056Zm-10,9.219l12-5.755v2.218l-12,5.754L0,16.746v-2.218l12,5.755Z"/>
</svg>

);
