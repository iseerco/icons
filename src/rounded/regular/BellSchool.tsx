import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const BellSchool = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  <svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m10 8a2 2 0 1 1 -2 2 2 2 0 0 1 2-2zm14 2a14.27 14.27 0 0 1 -11.484 13.952 2.95 2.95 0 0 1 -2.431-.646 3.013 3.013 0 0 1 -1.085-2.316v-1.041a10 10 0 1 1 9.382-15.394 1 1 0 1 1 -1.682 1.091 8 8 0 1 0 0 8.708 1 1 0 1 1 1.677 1.091 9.959 9.959 0 0 1 -7.377 4.492v1.053a1.016 1.016 0 0 0 .367.781.948.948 0 0 0 .791.213 12.192 12.192 0 0 0 9.47-9.053 2.955 2.955 0 0 1 -.628.069 3 3 0 1 1 3-3zm-2 0a1 1 0 1 0 -1 1 1 1 0 0 0 1-1z"/></svg>
);
