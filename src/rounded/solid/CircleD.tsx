import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const CircleD = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m16,12c0,2.343-1.906,4.25-4.25,4.25h-1.75c-.552,0-1-.449-1-1v-6.5c0-.551.448-1,1-1h1.75c2.344,0,4.25,1.907,4.25,4.25Zm8,0c0,6.617-5.383,12-12,12S0,18.617,0,12,5.383,0,12,0s12,5.383,12,12Zm-6,0c0-3.446-2.804-6.25-6.25-6.25h-1.75c-1.654,0-3,1.346-3,3v6.5c0,1.654,1.346,3,3,3h1.75c3.446,0,6.25-2.804,6.25-6.25Z"/></svg>

);
