import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiTsIndustryAlt = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m11,20h4v-4h-4v4Zm1-3h2v2h-2v-2Zm9-1h-4v4h4v-4Zm-1,3h-2v-2h2v2Zm-4-7.902v-5l-8,5.001V1h1V0H0v1h1v20.5c0,1.378,1.121,2.5,2.5,2.5h18c1.379,0,2.5-1.122,2.5-2.5V6.098l-8,5Zm7,10.402c0,.827-.673,1.5-1.5,1.5H3.5c-.827,0-1.5-.673-1.5-1.5V1h5v19h1v-7.723l7-4.374v5l8-5v13.598Z"/>
</svg>

);
