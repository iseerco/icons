import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const CircleB = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m12,0C5.383,0,0,5.383,0,12s5.383,12,12,12,12-5.383,12-12S18.617,0,12,0Zm2.375,18.25h-4.875c-1.378,0-2.5-1.122-2.5-2.5v-7.5c0-1.378,1.122-2.5,2.5-2.5h2.875c1.999,0,3.625,1.626,3.625,3.625,0,.658-.177,1.276-.484,1.809,1.441.479,2.484,1.841,2.484,3.441,0,1.999-1.626,3.625-3.625,3.625Zm-5.375-10c0-.276.224-.5.5-.5h2.875c.896,0,1.625.729,1.625,1.625s-.729,1.625-1.625,1.625h-3.375v-2.75Zm5.375,8h-4.875c-.276,0-.5-.224-.5-.5v-2.75h5.375c.896,0,1.625.729,1.625,1.625s-.729,1.625-1.625,1.625Z"/></svg>

);
