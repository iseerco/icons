import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsNotFound = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m20.5,1H3.5C1.57,1,0,2.57,0,4.5v18.5h24V4.5c0-1.93-1.57-3.5-3.5-3.5Zm-11,2c.828,0,1.5.672,1.5,1.5s-.672,1.5-1.5,1.5-1.5-.672-1.5-1.5.672-1.5,1.5-1.5Zm-5,0c.828,0,1.5.672,1.5,1.5s-.672,1.5-1.5,1.5-1.5-.672-1.5-1.5.672-1.5,1.5-1.5Zm16.5,17H3v-12h18v12Zm-8.582-6.707l.98-.98-.98-.98,1.414-1.414.98.98.98-.98,1.414,1.414-.98.98.98.98-1.414,1.414-.98-.98-.98.98-1.414-1.414Zm-4.645-.98l-.98-.98,1.414-1.414.98.98.98-.98,1.414,1.414-.98.98.98.98-1.414,1.414-.98-.98-.98.98-1.414-1.414.98-.98Zm.374,4.824c2.58-1.509,5.125-1.509,7.705,0l-1.009,1.727c-1.961-1.146-3.727-1.146-5.688,0l-1.009-1.727Z"/>
</svg>

);
