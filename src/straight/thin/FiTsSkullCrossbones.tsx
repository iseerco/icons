import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiTsSkullCrossbones = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m13.403,19.006l10.557,4.026-.356.935-11.604-4.426L.396,23.967l-.356-.935,10.557-4.026L.04,14.98l.356-.935,11.604,4.426,11.604-4.426.356.935-10.557,4.026Zm.597-11.006c.552,0,1-.448,1-1s-.448-1-1-1-1,.448-1,1,.448,1,1,1Zm-4,0c.552,0,1-.448,1-1s-.448-1-1-1-1,.448-1,1,.448,1,1,1Zm-2,4h-3v-5c0-3.86,3.14-7,7-7s7,3.14,7,7v5h-3v3h-8v-3Zm1-1v3h6v-3h3v-4c0-3.309-2.691-6-6-6s-6,2.691-6,6v4h3Z"/></svg>

);
