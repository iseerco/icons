import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const Rv = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M8,7V9H4V7Zm8,3v2h7.5a6.866,6.866,0,0,0-.419-.879L21.3,8H18A2,2,0,0,0,16,10Zm0,4v5h7a1,1,0,0,0,1-1V14.593c0-.2-.022-.4-.039-.593Zm-2,5H4a1,1,0,0,1-.707-.293L2.05,17.464A6.954,6.954,0,0,1,0,12.515V6A5.006,5.006,0,0,1,5,1H21a3,3,0,0,1,3,3V5a1,1,0,0,1-1,1H18a4,4,0,0,0-4,4ZM10,9V7A2,2,0,0,0,8,5H4A2,2,0,0,0,2,7V9a2,2,0,0,0,2,2H8A2,2,0,0,0,10,9ZM4.058,21c-.587,3.954,5.472,3.952,4.884,0Zm12,0c-.587,3.954,5.472,3.952,4.884,0Z"/></svg>

);
