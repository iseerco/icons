import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const ArrowDownTriangleSquare = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M11.72,18.31c.38,.4,.37,1.03-.04,1.41l-3.59,3.41c-.57,.57-1.33,.86-2.1,.86s-1.54-.29-2.13-.88L.31,19.72c-.4-.38-.42-1.01-.04-1.41,.38-.4,1.02-.42,1.41-.03l3.31,3.15V1c0-.55,.45-1,1-1s1,.45,1,1V21.43l3.31-3.15c.4-.38,1.03-.37,1.41,.03Zm8.28-4.31h-3c-1.65,0-3,1.35-3,3v3c0,1.65,1.35,3,3,3h3c1.65,0,3-1.35,3-3v-3c0-1.65-1.35-3-3-3Zm3.2-7.42l-2.69-4.39c-.4-.74-1.17-1.2-2.01-1.2s-1.61,.46-1.98,1.15l-2.74,4.48c-.39,.71-.37,1.56,.04,2.26,.42,.7,1.15,1.12,1.96,1.12h5.43c.81,0,1.55-.42,1.96-1.12,.42-.7,.43-1.54,.02-2.3Z"/></svg>

);
