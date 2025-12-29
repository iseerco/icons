import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiTsPyramid = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m24,23.99H0L10.095,1.233c.348-.773,1.06-1.233,1.905-1.233s1.559.461,1.904,1.232l10.096,22.758Zm-22.463-1h20.926L12.991,1.64c-.182-.406-.543-.64-.991-.64s-.809.234-.992.642L1.537,22.99Z"/>
</svg>

);
