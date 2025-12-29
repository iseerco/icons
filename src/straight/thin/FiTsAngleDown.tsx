import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiTsAngleDown = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m12,18c-.4,0-.777-.156-1.061-.439L.112,6.733l.707-.707,10.827,10.827c.189.189.518.189.707,0l10.827-10.827.707.707-10.827,10.827c-.283.283-.66.439-1.061.439Z"/>
</svg>

);
