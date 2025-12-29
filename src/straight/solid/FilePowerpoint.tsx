import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FilePowerpoint = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M13,14c0,.55-.45,1-1,1h-1v-2h1c.55,0,1,.45,1,1ZM17,.59V5h4.41L17,.59Zm5,6.41V24H2V3C2,1.34,3.34,0,5,0H15V7h7Zm-7,7c0-1.65-1.35-3-3-3h-3v9h2v-3h1c1.65,0,3-1.35,3-3Z"/></svg>

);
