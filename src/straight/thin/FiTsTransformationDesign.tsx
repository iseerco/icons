import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiTsTransformationDesign = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m12.438,0l-5.424,22.885-.014,1.115h11.562L23.986,1.115l.014-1.115h-11.562Zm5.333,23h-9.757L13.229,1h9.757l-5.215,22Zm-16.771,0h4v1H0v-5h1v4ZM0,0h5v1H1v4H0V0Zm1,11H0v-4h1v4Zm0,6H0v-4h1v4ZM10.033,1h-3.033V0h3.223l-.19,1Z"/>
</svg>

);
