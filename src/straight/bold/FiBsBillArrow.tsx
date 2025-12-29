import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsBillArrow = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m24,9.5v14.5H0v-14.5c0-1.93,1.57-3.5,3.5-3.5h10.5v3H3.5c-.276,0-.5.224-.5.5v11.5h18V6.051c1.692.245,3,1.691,3,3.449Zm-5.5,7.5c-.828,0-1.5.672-1.5,1.5s.672,1.5,1.5,1.5,1.5-.672,1.5-1.5-.672-1.5-1.5-1.5Zm0-7c-.828,0-1.5.672-1.5,1.5s.672,1.5,1.5,1.5,1.5-.672,1.5-1.5-.672-1.5-1.5-1.5Zm-13,7c-.828,0-1.5.672-1.5,1.5s.672,1.5,1.5,1.5,1.5-.672,1.5-1.5-.672-1.5-1.5-1.5Zm3.5-2c0,1.657,1.343,3,3,3s3-1.343,3-3-1.343-3-3-3-3,1.343-3,3Zm-3.5-5c-.828,0-1.5.672-1.5,1.5s.672,1.5,1.5,1.5,1.5-.672,1.5-1.5-.672-1.5-1.5-1.5Zm10.5-1.003l3,.007.011-4.983h2.489l-3.157-3.65c-.443-.494-1.217-.494-1.66,0l-3.183,3.65h2.511l-.011,4.976Z"/>
</svg>

);
