import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const GlassHalf = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m1.01,3.246c-.068-.833.218-1.664.784-2.279s1.37-.967,2.206-.967h16c.839,0,1.646.355,2.212.973.566.619.85,1.453.776,2.29l-.68,7.737H1.647l-.638-7.754Zm.802,9.754l.527,6.41c.213,2.574,2.401,4.59,4.983,4.59h9.264c2.61,0,4.752-1.961,4.98-4.562l.566-6.438H1.812Z"/>
</svg>

);
