import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiTsBanner4 = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m24.055,14l-3.166-4,3.165-4h-9.054v3h-6v-3H-.054l3.166,4L-.054,14h5.054v4h14v-4h5.055Zm-4.441-4l2.375,3h-2.988v-3.707l-2.293-2.293h5.28l-2.374,3ZM2.012,13l2.375-3-2.375-3h5.281l-2.293,2.293v3.707h-2.988Zm3.988,4v-7h12v7H6Z"/>
</svg>

);
