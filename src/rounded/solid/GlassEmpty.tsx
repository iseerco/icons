import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const GlassEmpty = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m16.586,24H7.323c-2.583,0-4.771-2.016-4.983-4.59L1.01,3.246c-.068-.833.217-1.664.784-2.279s1.37-.967,2.206-.967h16c.839,0,1.646.355,2.212.973.566.619.85,1.453.776,2.29l-1.422,16.175c-.229,2.601-2.37,4.562-4.98,4.562Z"/>
</svg>

);
