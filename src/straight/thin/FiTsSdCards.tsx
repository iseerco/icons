import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiTsSdCards = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m3,23h16v1H2V5.5c0-.816.393-1.542,1-1.999v19.499ZM22,2.5v18.5H5V5.328c0-.668.26-1.295.732-1.768l2.828-2.828c.472-.473,1.1-.732,1.768-.732h9.171c1.378,0,2.5,1.121,2.5,2.5Zm-1,0c0-.827-.673-1.5-1.5-1.5h-9.171c-.401,0-.777.156-1.061.439l-2.828,2.828c-.279.279-.439.666-.439,1.061v14.672h15V2.5Zm-3,3.5h1v-3h-1v3Zm-2,0h1v-3h-1v3Zm-2,0h1v-3h-1v3Zm-2,0h1v-3h-1v3Zm-2,0h1v-3h-1v3Z"/>
</svg>

);
