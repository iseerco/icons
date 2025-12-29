import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiTsEngine = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m21,8v-3h-5v-3h5v-1h-11v1h5v3h-6.234l-2.5,3h-2.266v5H1v-5H0v11h1v-5h3v4.707l3.293,3.293h13.707v-2h3v-12h-3Zm2,11h-3v2H7.707l-2.707-2.707v-9.293h1.734l2.5-3h10.766v3h3v10Z"/>
</svg>

);
