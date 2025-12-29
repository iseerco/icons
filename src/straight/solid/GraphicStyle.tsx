import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const GraphicStyle = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M24,23.41v.59H0v-6.59l5-5,9,9,4-4,6,6ZM18.67,5.33l1.33,2.67,1.33-2.67,2.67-1.33-2.67-1.33-1.33-2.67-1.33,2.67-2.67,1.33,2.67,1.33Zm5.33,.9v14.35l-6-6-4,4L5,9.59,0,14.59V3C0,1.35,1.35,0,3,0h14.76l-.59,1.18-5.65,2.82,5.65,2.82,2.82,5.65,2.82-5.65,1.18-.59Zm-15-.74c0-.83-.67-1.5-1.5-1.5s-1.5,.67-1.5,1.5,.67,1.5,1.5,1.5,1.5-.67,1.5-1.5Zm8,5l-2.33-1.17-1.17-2.33-1.17,2.33-2.33,1.17,2.33,1.17,1.17,2.33,1.17-2.33,2.33-1.17Z"/></svg>

);
