import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const PlaceOfWorship = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m7,24h2v-5c0-1.654,1.346-3,3-3s3,1.346,3,3v5h2V3.756L12,.006l-5,3.75v20.244Zm5-14c.828,0,1.5.672,1.5,1.5s-.672,1.5-1.5,1.5-1.5-.672-1.5-1.5.672-1.5,1.5-1.5Zm1,9v5h-2v-5c0-.551.448-1,1-1s1,.449,1,1Zm-8,5H0v-10.202l5-3.787v13.989Zm19-10.463v10.463h-5v-14.035l5,3.571Z"/>
</svg>

);
