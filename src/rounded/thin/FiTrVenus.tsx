import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiTrVenus = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m20,8C20,3.589,16.411,0,12,0S4,3.589,4,8c0,4.243,3.321,7.725,7.5,7.984v4.016h-3c-.276,0-.5.224-.5.5s.224.5.5.5h3v2.5c0,.276.224.5.5.5s.5-.224.5-.5v-2.5h3c.276,0,.5-.224.5-.5s-.224-.5-.5-.5h-3v-4.016c4.179-.259,7.5-3.741,7.5-7.984Zm-15,0c0-3.859,3.14-7,7-7s7,3.141,7,7-3.14,7-7,7-7-3.141-7-7Z"/>
</svg>

);
