import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsFolderTimes = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M24,6.5V23h-6.721c.926-.815,1.663-1.838,2.134-3h1.587V8H3v12h1.587c.471,1.162,1.208,2.185,2.134,3H0V4.5C0,2.57,1.57,1,3.5,1h4.854l4,2h8.146c1.93,0,3.5,1.57,3.5,3.5Zm-6,10.5c0,3.314-2.686,6-6,6s-6-2.686-6-6,2.686-6,6-6,6,2.686,6,6Zm-2.939,.939l-1.561-1.561v-2.379h-3v3.621l2.439,2.439,2.121-2.121Z"/></svg>

);
