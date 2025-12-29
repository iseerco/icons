import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiTsArrowAltFromBottom = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M12.5,23V7h6.625L13.356,.612c-.69-.779-2.028-.774-2.711-.002L4.875,7h6.625V23H3v1H21v-1H12.5ZM11.391,1.276c.315-.356,.902-.356,1.218,0l4.266,4.724H7.125L11.391,1.276Z"/></svg>

);
