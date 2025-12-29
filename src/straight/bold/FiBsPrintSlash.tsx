import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsPrintSlash = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m16,20.949l3,3v.051H5v-3H0v-12c0-1.096.591-2.056,1.471-2.58l1.529,1.529v10.051h2v-5h3.051l3,3h-3.051v5h8v-.051Zm8,.051h-.879l.84.84-2.121,2.121L.039,2.16,2.16.039l2.84,2.84V0h14v6h2c1.654,0,3,1.346,3,3v12ZM8,5.879l.121.121h7.879v-3h-8v2.879Zm12.121,12.121h.879v-9h-9.879l4,4h3.879v3.879l1.121,1.121Z"/>
</svg>

);
