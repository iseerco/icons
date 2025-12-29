import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const Barefoot = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="M22,20h-2.539c-1.622-1.952-2.645-4.035-3.636-6.053-.821-1.671-1.601-3.26-2.654-4.603L17.454,0H6.151L3.096,6.542c-.293,.569-.754,.951-1.242,1.355-.826,.684-1.854,1.534-1.854,3.31,0,2.084,1.399,3.678,3.742,4.263,1.609,.402,4.617,2.998,7.85,6.773,.956,1.116,2.341,1.757,3.8,1.757h6.608c1.103,0,2-.897,2-2s-.897-2-2-2Z"/>
</svg>

);
