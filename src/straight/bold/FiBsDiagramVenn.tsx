import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsDiagramVenn = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M16,4c-1.46,0-2.82,.39-4,1.07-1.18-.68-2.54-1.07-4-1.07C3.59,4,0,7.59,0,12s3.59,8,8,8c1.46,0,2.82-.39,4-1.07,1.18,.68,2.54,1.07,4,1.07,4.41,0,8-3.59,8-8s-3.59-8-8-8Zm-5,8c0-1.12,.37-2.16,1-3,.63,.84,1,1.87,1,3s-.37,2.16-1,3c-.63-.84-1-1.87-1-3Zm-8,0c0-2.76,2.24-5,5-5,.55,0,1.07,.09,1.57,.25-.98,1.33-1.57,2.97-1.57,4.75s.58,3.42,1.57,4.75c-.49,.16-1.02,.25-1.57,.25-2.76,0-5-2.24-5-5Z"/></svg>

);
