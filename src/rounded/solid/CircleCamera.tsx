import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const CircleCamera = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m15,9h-6c-.552,0-1,.448-1,1v4c0,.552.448,1,1,1h6c.552,0,1-.448,1-1v-4c0-.552-.448-1-1-1Zm-3,5c-1.105,0-2-.895-2-2s.895-2,2-2,2,.895,2,2-.895,2-2,2Zm0-14C5.383,0,0,5.383,0,12s5.383,12,12,12,12-5.383,12-12S18.617,0,12,0Zm6,14c0,1.654-1.346,3-3,3h-6c-1.654,0-3-1.346-3-3v-4c0-1.639,1.321-2.974,2.953-2.999l.696-1.083c.368-.574.997-.918,1.682-.918h1.338c.685,0,1.313.344,1.683.919l.695,1.082c1.633.025,2.953,1.36,2.953,2.999v4Z"/>
</svg>

);
