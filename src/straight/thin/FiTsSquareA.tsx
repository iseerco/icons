import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiTsSquareA = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m21.5,0H2.5C1.122,0,0,1.122,0,2.5v21.5h24V2.5c0-1.378-1.122-2.5-2.5-2.5Zm1.5,23H1V2.5c0-.827.673-1.5,1.5-1.5h19c.827,0,1.5.673,1.5,1.5v20.5ZM12,4c-1.077,0-1.922.289-2.525,1.658l-4.975,14.342h1.094l1.723-5h9.366l1.723,5h1.094l-4.975-14.342c-.604-1.369-1.448-1.658-2.525-1.658Zm-4.339,10l2.751-7.981c.399-.871.813-1.018,1.588-1.019.775,0,1.189.148,1.588,1.019l2.751,7.981H7.661Z"/></svg>

);
