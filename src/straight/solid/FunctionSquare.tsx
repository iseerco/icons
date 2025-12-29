import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FunctionSquare = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m21,0H3C1.346,0,0,1.346,0,3v21h24V3c0-1.654-1.346-3-3-3Zm-10,6h-1c-.551,0-1,.448-1,1v5h2v2h-2v6h-2v-6h-2v-2h2v-5c0-1.654,1.346-3,3-3h1v2Zm8.353,14h-2.327l-1.276-2.087-1.276,2.087h-2.327l2.431-4.003-2.431-3.997h2.331l1.272,2.08,1.272-2.08h2.331l-2.431,3.997,2.431,4.003Z"/>
</svg>

);
