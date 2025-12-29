import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBrNfc = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M18.5,0H5.5C2.47,0,0,2.47,0,5.5v13c0,3.03,2.47,5.5,5.5,5.5h13c3.03,0,5.5-2.47,5.5-5.5V5.5c0-3.03-2.47-5.5-5.5-5.5Zm2.5,18.5c0,1.38-1.12,2.5-2.5,2.5H5.5c-1.38,0-2.5-1.12-2.5-2.5V5.5c0-1.38,1.12-2.5,2.5-2.5h13c1.38,0,2.5,1.12,2.5,2.5v13Zm-2-10.5v8.5c0,1.38-1.12,2.5-2.5,2.5H7.5c-1.38,0-2.5-1.12-2.5-2.5V6.5c0-.83,.67-1.5,1.5-1.5h2.5c.61,0,1.15,.37,1.39,.93s.1,1.21-.33,1.63l-2.06,2.06v6.38h8v-7.88l-2.85,2.85c-.09,.09-.15,.22-.15,.35v1.17c0,.83-.67,1.5-1.5,1.5s-1.5-.67-1.5-1.5v-1.17c0-.94,.36-1.81,1.03-2.48l3.06-3.06c.51-.51,1.19-.79,1.91-.79,1.65,0,3,1.35,3,3Z"/></svg>

);
