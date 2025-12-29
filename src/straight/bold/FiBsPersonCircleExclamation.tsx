import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsPersonCircleExclamation = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m4,2.5c0-1.381,1.119-2.5,2.5-2.5s2.5,1.119,2.5,2.5-1.119,2.5-2.5,2.5-2.5-1.119-2.5-2.5Zm8,10.221c-1.241,1.409-2,3.254-2,5.279v6h-3v-6h-1v6h-3v-6H1v-8.5c0-1.93,1.57-3.5,3.5-3.5h4c1.93,0,3.5,1.57,3.5,3.5v3.221Zm-8,2.279h5v-5.5c0-.275-.224-.5-.5-.5h-4c-.276,0-.5.225-.5.5v5.5Zm20,3c0,3.314-2.686,6-6,6s-6-2.686-6-6,2.686-6,6-6,6,2.686,6,6Zm-5,2h-2v2h2v-2Zm0-6h-2v5h2v-5Z"/>
</svg>

);
