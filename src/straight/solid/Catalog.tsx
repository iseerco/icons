import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const Catalog = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m9.472,5L19,.15v4.85h-9.528Zm-5.472.541L14.884,0H3C1.346,0,0,1.346,0,3v15h4V5.541Zm20,4.459v14H6V7h15c1.654,0,3,1.346,3,3Zm-11,7h-4v4h4v-4Zm0-7h-4v4h4v-4Zm8,8h-6v2h6v-2Zm0-7h-6v2h6v-2Z"/>
</svg>

);
