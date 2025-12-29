import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const Bone = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M7.5,24c-.93,0-1.83-.28-2.6-.83-.82-.58-1.42-1.42-1.7-2.37-.95-.29-1.79-.89-2.37-1.7-.73-1.03-.99-2.29-.73-3.55,.36-1.75,1.79-3.15,3.56-3.48,1.16-.21,2.33,.02,3.3,.65l5.81-5.74c-.67-1-.9-2.18-.69-3.34,.32-1.77,1.72-3.2,3.48-3.56,1.25-.26,2.52,0,3.55,.73,.82,.58,1.42,1.42,1.7,2.37,.95,.29,1.79,.89,2.37,1.7,.73,1.03,.99,2.29,.73,3.55-.36,1.75-1.79,3.15-3.56,3.48-1.16,.21-2.33-.02-3.3-.65l-5.81,5.74c.67,1,.9,2.18,.69,3.34-.32,1.77-1.72,3.2-3.48,3.56-.32,.07-.64,.1-.95,.1Z"/></svg>

);
