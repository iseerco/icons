import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsCheckCircle = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m15.448,7.931l2.104,2.139-5.293,5.207c-.481.482-1.118.724-1.756.724s-1.282-.244-1.771-.732l-2.776-2.69,2.088-2.154,2.453,2.378,4.951-4.87Zm8.552,4.069c0,6.617-5.383,12-12,12S0,18.617,0,12,5.383,0,12,0s12,5.383,12,12Zm-3,0c0-4.962-4.037-9-9-9S3,7.038,3,12s4.037,9,9,9,9-4.038,9-9Z"/></svg>

);
