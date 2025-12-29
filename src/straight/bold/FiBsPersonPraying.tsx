import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsPersonPraying = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m13,2.468C13,1.087,14.119-.032,15.5-.032s2.5,1.119,2.5,2.5-1.119,2.5-2.5,2.5-2.5-1.119-2.5-2.5Zm3.257,11.968l5.742-3.829-1.664-2.496-3.258,2.171-1.249-1.856c-.514-.979-1.358-1.731-2.394-2.127-.736-.321-1.522-.384-2.272-.181-.974.263-1.788.933-2.263,1.906l-2.472,5.757c-.557,1.134-.817,2.815,1.071,4.353l3.311,2.866h-5.809v3h11v-2.475l-4.874-4.217,2.717-6.476,2.413,3.604Z"/></svg>

);
