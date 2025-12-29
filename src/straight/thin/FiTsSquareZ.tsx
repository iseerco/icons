import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiTsSquareZ = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m6.167,18.23c-.19.19-.117.422-.089.487.027.066.139.282.422.282h12.5v1H6.5c-.601,0-1.116-.345-1.346-.899-.229-.555-.108-1.163.316-1.587l12.404-11.744c.19-.19.117-.422.089-.487-.027-.066-.139-.282-.422-.282H5v-1h12.542c.601,0,1.116.345,1.346.899.23.555.108,1.163-.316,1.587l-12.404,11.744ZM24,2.5v21.5H0V2.5C0,1.121,1.122,0,2.5,0h19c1.378,0,2.5,1.121,2.5,2.5Zm-1,0c0-.827-.673-1.5-1.5-1.5H2.5c-.827,0-1.5.673-1.5,1.5v20.5h22V2.5Z"/></svg>

);
