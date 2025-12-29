import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FaceViewfinder = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m3,22h5v2H3c-1.654,0-3-1.346-3-3v-5h2v5c0,.551.448,1,1,1Zm19-1c0,.551-.448,1-1,1h-5v2h5c1.654,0,3-1.346,3-3v-5h-2v5ZM21,0h-5v2h5c.552,0,1,.449,1,1v5h2V3c0-1.654-1.346-3-3-3ZM2,3c0-.551.448-1,1-1h5V0H3C1.346,0,0,1.346,0,3v5h2V3Zm9,7.5c0-.828-.672-1.5-1.5-1.5s-1.5.672-1.5,1.5.672,1.5,1.5,1.5,1.5-.672,1.5-1.5Zm3.5-1.5c-.828,0-1.5.672-1.5,1.5s.672,1.5,1.5,1.5,1.5-.672,1.5-1.5-.672-1.5-1.5-1.5Zm-2.5,11c-4.411,0-8-3.589-8-8S7.589,4,12,4s8,3.589,8,8-3.589,8-8,8Zm6-8c0-3.309-2.691-6-6-6s-6,2.691-6,6,2.691,6,6,6,6-2.691,6-6Zm-6,2c-.971,0-2.096-.602-2.447-.833l-1.107,1.666c.18.12,1.803,1.168,3.555,1.168s3.375-1.048,3.555-1.168l-1.109-1.664c-.013.008-1.28.832-2.445.832Z"/>
</svg>

);
