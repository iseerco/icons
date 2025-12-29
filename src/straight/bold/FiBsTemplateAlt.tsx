import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsTemplateAlt = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M16.38,0H5c-1.65,0-3,1.35-3,3V24H22V5.66L16.38,0ZM5,21V3H14v5h5v13H5Zm2-11h4v3h-1v1h-3v-4Zm3,6h1v3H7v-4h3v1Zm4-1h3v4h-4v-3h1v-1Zm-1-5h4v4h-3v-1h-1v-3ZM7,5h5v3H7v-3Z"/></svg>

);
