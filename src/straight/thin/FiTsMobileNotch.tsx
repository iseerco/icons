import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiTsMobileNotch = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M4,0V21.5c0,1.378,1.122,2.5,2.5,2.5h11c1.378,0,2.5-1.122,2.5-2.5V0H4ZM14.806,1l-.667,2h-4.279l-.667-2h5.613Zm4.194,20.5c0,.827-.673,1.5-1.5,1.5H6.5c-.827,0-1.5-.673-1.5-1.5V1h3.14l1,3h5.721l1-3h3.14V21.5Z"/><rect x="10" y="20" width="4" height="1"/></svg>

);
