import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const PenFancySlash = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m23.707,22.293c.391.391.391,1.023,0,1.414-.195.195-.451.293-.707.293s-.512-.098-.707-.293L.293,1.707C-.098,1.316-.098.684.293.293S1.316-.098,1.707.293l9.204,9.204L19.666.742c.99-.99,2.6-.99,3.59,0,.479.479.744,1.117.744,1.795s-.264,1.316-.744,1.795l-8.755,8.755,9.206,9.206ZM4.676,12.321c-1.438.452-2.546,1.645-2.891,3.113L.123,22.526l5.202-5.202c.391-.391,1.023-.391,1.414,0s.391,1.023,0,1.414l-5.202,5.202,7.093-1.663c1.468-.345,2.66-1.452,3.112-2.89l.846-2.692-5.205-5.205-2.708.83Z"/>
</svg>

);
