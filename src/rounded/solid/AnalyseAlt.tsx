import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const AnalyseAlt = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m23.707,22.293l-5.963-5.963c1.412-1.725,2.262-3.927,2.262-6.324C20.006,4.492,15.52.006,10.006.006S.006,4.492.006,10.006s4.486,10,10,10c2.398,0,4.6-.85,6.324-2.262l5.963,5.963c.195.195.451.293.707.293s.512-.098.707-.293c.391-.391.391-1.023,0-1.414Zm-9.707-9.293H6c-.552,0-1-.447-1-1s.448-1,1-1v-2c0-.553.448-1,1-1s1,.447,1,1v2h1v-5c0-.553.448-1,1-1s1,.447,1,1v5h1v-3c0-.553.448-1,1-1s1,.447,1,1v3c.552,0,1,.447,1,1s-.448,1-1,1Z"/>
</svg>

);
