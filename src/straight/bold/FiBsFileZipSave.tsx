import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsFileZipSave = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="M3,21h7v3H0V3C0,1.346,1.346,0,3,0H14.381l5.619,5.664v4.336h-3v-2h-5V3h-3v3h-3V3H3V21Zm3-10h3v-3h-3v3Zm0,2l-1,5v1h5v-1l-1-5h-3Zm18,2v9H12V14c0-1.105,.895-2,2-2h7l3,3Zm-4,5c0-1.105-.895-2-2-2s-2,.895-2,2,.895,2,2,2,2-.895,2-2Zm0-6h-5v2h5v-2Z"/>
</svg>

);
