import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const ItAlt = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m0,9h24v13h-7.848c1.434-1.192,2.348-2.989,2.348-5,0-2.703-1.651-5.02-3.999-6h-5.001c-2.348.98-3.999,3.297-3.999,6,0,2.011.914,3.808,2.348,5H0v-13Zm14,3.988v2.512c0,1.105-.895,2-2,2s-2-.895-2-2v-2.512c-1.476.738-2.5,2.249-2.5,4.012,0,1.956,1.256,3.605,3,4.224v2.776h3v-2.776c1.744-.62,3-2.268,3-4.224,0-1.763-1.024-3.273-2.5-4.012ZM24,3v4H0V3C0,1.346,1.346,0,3,0h18c1.654,0,3,1.346,3,3Zm-19,.5c0-.828-.672-1.5-1.5-1.5s-1.5.672-1.5,1.5.672,1.5,1.5,1.5,1.5-.672,1.5-1.5Zm4,0c0-.828-.672-1.5-1.5-1.5s-1.5.672-1.5,1.5.672,1.5,1.5,1.5,1.5-.672,1.5-1.5Z"/>
</svg>

);
