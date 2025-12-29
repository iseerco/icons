import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiTsArrowSmallDown = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m17.117,13.118l-4.617,4.617V5h-1v12.733l-4.617-4.617-.707.707,4.718,4.717c.295.296.688.459,1.107.459s.812-.163,1.106-.459l4.717-4.716-.707-.707Z"/>
</svg>

);
