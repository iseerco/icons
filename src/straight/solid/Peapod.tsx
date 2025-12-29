import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const Peapod = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m23.999.972l-.028-.972h-.972C22.597,0,13.082.075,6.579,6.579.077,13.083,0,22.597,0,22.999v.972s1.071.03,1.186.03c1.482,0,9.941-.287,16.234-6.58C24.194,10.647,24.01,1.364,23.999.972ZM6,20c-1.105,0-2-.895-2-2s.895-2,2-2,2,.895,2,2-.895,2-2,2Zm4-4c-1.105,0-2-.895-2-2s.895-2,2-2,2,.895,2,2-.895,2-2,2Zm4-4c-1.105,0-2-.895-2-2s.895-2,2-2,2,.895,2,2-.895,2-2,2Zm4-4c-1.105,0-2-.895-2-2s.895-2,2-2,2,.895,2,2-.895,2-2,2Z"/>
</svg>

);
