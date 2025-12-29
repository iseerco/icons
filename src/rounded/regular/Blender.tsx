import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const Blender = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m19.187,17.18l2.772-13.687c.146-.872-.099-1.758-.67-2.432s-1.406-1.061-2.29-1.061H5.5C3.019,0,1,2.019,1,4.5v6c0,2.481,2.019,4.5,4.5,4.5h.5v2.127c-1.723.445-3,2.013-3,3.873,0,1.654,1.346,3,3,3h13c1.654,0,3-1.346,3-3,0-1.793-1.185-3.314-2.813-3.82Zm-13.687-4.18c-1.378,0-2.5-1.122-2.5-2.5v-6c0-1.378,1.122-2.5,2.5-2.5h.5v11h-.5Zm4.5,0h-2v-2h2c.552,0,1-.448,1-1s-.448-1-1-1h-2v-2h2c.552,0,1-.448,1-1s-.448-1-1-1h-2v-3h10.999c.299,0,.57.125.764.354.193.228.272.516.229.776l-2.81,13.87h-9.182v-2h2c.552,0,1-.448,1-1s-.448-1-1-1Zm9,9H6c-.551,0-1-.449-1-1,0-1.103.897-2,2-2h11c1.103,0,2,.897,2,2,0,.551-.448,1-1,1Z"/>
</svg>

);
