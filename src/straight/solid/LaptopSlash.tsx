import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const LaptopSlash = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m9.082,15H2V6.38l9.62,9.62h-1.691l-.846-1Zm-.092,3l-.846-1H0v1c0,1.657,1.343,3,3,3h13.62l-3-3h-4.629Zm15.009,0v-1h-5.586l-2-2h5.586V3H4.414L1.457.043.043,1.457l22.5,22.5,1.414-1.414-1.782-1.782c1.073-.457,1.825-1.521,1.825-2.761Z"/>
</svg>

);
