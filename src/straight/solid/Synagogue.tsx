import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const Synagogue = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m17,3.782L12,.032l-5,3.75v20.218h2v-5c0-1.654,1.346-3,3-3s3,1.346,3,3v5h2V3.782Zm-2,7.949h-2.1l-.9,1.5-.9-1.5h-2.1l1.05-1.75-1.05-1.75h2.1l.9-1.5.9,1.5h2.1l-1.05,1.75,1.05,1.75Zm-2,7.269v5h-2v-5c0-.551.449-1,1-1s1,.449,1,1Zm11-7.5v12.5h-5v-12.5l2.5-2,2.5,2Zm-19,0v12.5H0v-12.5l2.5-2,2.5,2Z"/>
</svg>

);
