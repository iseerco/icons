import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiTsAngleUp = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m23.181,17.974L12.354,7.146c-.189-.189-.518-.189-.707,0L.819,17.974l-.707-.707L10.939,6.439c.566-.566,1.555-.566,2.121,0l10.827,10.827-.707.707Z"/>
</svg>

);
