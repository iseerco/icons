import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const Sphere = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M12,0A12,12,0,1,0,24,12,12.013,12.013,0,0,0,12,0Zm0,16C6.276,16,2,13.889,2,12S6.276,8,12,8s10,2.111,10,4S17.724,16,12,16ZM12,2a10.013,10.013,0,0,1,9.189,6.062A18.635,18.635,0,0,0,12,6,18.635,18.635,0,0,0,2.811,8.062,10.013,10.013,0,0,1,12,2Zm0,20a10.013,10.013,0,0,1-9.189-6.062A18.635,18.635,0,0,0,12,18a18.635,18.635,0,0,0,9.189-2.062A10.013,10.013,0,0,1,12,22Z"/></svg>

);
