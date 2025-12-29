import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const BracketRound = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M14,24c.29,0,.58-.13,.78-.38,.34-.43,.27-1.06-.16-1.4-.09-.07-4.63-3.84-4.63-10.22S14.58,1.82,14.63,1.78c.43-.35,.5-.98,.15-1.41-.34-.43-.97-.5-1.4-.15-.22,.18-5.37,4.39-5.37,11.78,0,7.4,5.16,11.61,5.38,11.78,.18,.15,.41,.22,.62,.22Z"/></svg>

);
