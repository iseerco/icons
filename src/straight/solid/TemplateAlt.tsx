import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const TemplateAlt = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M21.77,5h-4.41V.59l4.41,4.41Zm-6.41,2V0H5.36c-1.66,0-3,1.34-3,3V24H22.36V7h-7Zm-5,13H6.36v-4h2v2h2v2Zm0-8h-2v2h-2v-4h4v2Zm1-5H6.36v-2h5v2Zm7,13h-4v-2h2v-2h2v4Zm0-6h-2v-2h-2v-2h4v4Z"/></svg>

);
