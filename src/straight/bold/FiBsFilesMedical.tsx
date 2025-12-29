import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsFilesMedical = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m22,3.301L18.806.074l-7.306-.074c-1.93,0-3.5,1.57-3.5,3.5v1.5h-2.5c-1.93,0-3.5,1.57-3.5,3.5v15.5h15v-6h5V3.301Zm-8,17.699H5v-12.5c0-.276.224-.5.5-.5h2.5v10h6v3Zm-3-6V3.5c0-.276.224-.5.485-.5l4.515.046v2.954h3v9h-8Zm5-6h2v2h-2v2h-2v-2h-2v-2h2v-2h2v2Z"/></svg>

);
