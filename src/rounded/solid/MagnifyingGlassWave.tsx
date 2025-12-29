import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const MagnifyingGlassWave = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m23.707,22.293l-5.969-5.969c1.412-1.725,2.262-3.927,2.262-6.324C20,4.486,15.514,0,10,0S0,4.486,0,10s4.486,10,10,10c2.398,0,4.6-.85,6.324-2.262l5.969,5.969c.195.195.451.293.707.293s.512-.098.707-.293c.391-.391.391-1.023,0-1.414Zm-15.707-10.293c0,.553-.448,1-1,1s-1-.447-1-1v-4c0-.553.448-1,1-1s1,.447,1,1v4Zm3,2c0,.553-.448,1-1,1s-1-.447-1-1V6c0-.553.448-1,1-1s1,.447,1,1v8Zm3-3c0,.553-.448,1-1,1s-1-.447-1-1v-2c0-.553.448-1,1-1s1,.447,1,1v2Z"/>
</svg>

);
