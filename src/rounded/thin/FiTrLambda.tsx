import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiTrLambda = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m24,23.5c0,.276-.224.5-.5.5h-1.479c-1.723,0-3.315-1.004-4.06-2.559l-6.527-13.647L2.941,23.735c-.09.169-.263.265-.441.265-.08,0-.16-.019-.235-.059-.243-.13-.336-.433-.206-.677L10.898,6.673l-1.761-3.683c-.578-1.209-1.817-1.99-3.157-1.99h-1.479c-.276,0-.5-.224-.5-.5s.224-.5.5-.5h1.479c1.723,0,3.315,1.004,4.06,2.559l8.824,18.451c.578,1.209,1.817,1.99,3.157,1.99h1.479c.276,0,.5.224.5.5Z"/>
</svg>

);
