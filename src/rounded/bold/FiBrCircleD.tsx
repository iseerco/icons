import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBrCircleD = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m12,0C5.383,0,0,5.383,0,12s5.383,12,12,12,12-5.383,12-12S18.617,0,12,0Zm0,21c-4.963,0-9-4.038-9-9S7.037,3,12,3s9,4.038,9,9-4.037,9-9,9Zm-.25-15.25h-1.25c-1.93,0-3.5,1.57-3.5,3.5v5.5c0,1.93,1.57,3.5,3.5,3.5h1.25c3.446,0,6.25-2.804,6.25-6.25s-2.804-6.25-6.25-6.25Zm0,9.5h-1.25c-.275,0-.5-.224-.5-.5v-5.5c0-.276.225-.5.5-.5h1.25c1.792,0,3.25,1.458,3.25,3.25s-1.458,3.25-3.25,3.25Z"/></svg>

);
