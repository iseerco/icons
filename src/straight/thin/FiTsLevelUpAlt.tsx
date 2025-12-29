import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiTsLevelUpAlt = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M19.714,7L13.866,.608c-.695-.773-2.043-.77-2.731-.002L5.286,7h6.714v14.5c0,.827-.673,1.5-1.5,1.5H0v1H10.5c1.379,0,2.5-1.121,2.5-2.5V7h6.714ZM11.876,1.278c.322-.359,.926-.359,1.248,0l4.32,4.722H7.556L11.876,1.278Z"/></svg>

);
