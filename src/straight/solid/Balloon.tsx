import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const Balloon = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m22,9.378C22,4.215,17.514.015,12,.015S2,4.215,2,9.378c0,5.558,3.715,11.725,8.853,12.54-.514.553-.853,1.397-.853,2.082h4c0-.685-.338-1.529-.853-2.082,5.138-.815,8.853-6.982,8.853-12.54Zm-7.327,6.123l-1.424-1.276c.794-.897,1.627-2.446,1.751-4.225h1.968c-.161,2.324-1.259,4.346-2.295,5.501Z"/>
</svg>

);
