import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiTsBowArrow = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M21.5,0h-3.5V1h3.5c.231,0,.451,.053,.646,.147l-4.223,4.223c-2.35-2.176-5.387-3.369-8.608-3.369C5.928,2,2.742,3.319,.347,5.715L-.007,6.069,8.609,14.684l-3.316,3.316H0v1H4.293l-3.646,3.646,.707,.707,3.649-3.649,.01,4.297,1-.002-.012-5.293,3.315-3.315,8.615,8.615,.354-.354c2.396-2.396,3.715-5.581,3.715-8.969,0-3.221-1.193-6.258-3.369-8.608L22.853,1.854c.094,.196,.147,.415,.147,.646v3.5h1V2.5c0-1.378-1.122-2.5-2.5-2.5ZM1.415,6.076c4.456-4.093,11.346-4.093,15.802,0l-7.9,7.9L1.415,6.076ZM17.924,22.585l-7.901-7.901,7.9-7.9c4.094,4.456,4.095,11.346,0,15.802Z"/></svg>

);
