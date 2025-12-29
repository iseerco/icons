import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiTrPlug = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m22.5,8h-5.5V.5c0-.276-.224-.5-.5-.5s-.5.224-.5.5v7.5h-8V.5c0-.276-.224-.5-.5-.5s-.5.224-.5.5v7.5H1.5c-.276,0-.5.224-.5.5s.224.5.5.5h1.5v3c0,4.794,3.77,8.713,8.5,8.975v2.525c0,.276.224.5.5.5s.5-.224.5-.5v-2.525c4.73-.262,8.5-4.181,8.5-8.975v-3h1.5c.276,0,.5-.224.5-.5s-.224-.5-.5-.5Zm-2.5,4c0,4.411-3.589,8-8,8s-8-3.589-8-8v-3h16v3Z"/>
</svg>

);
