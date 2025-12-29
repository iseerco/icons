import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const BracketRound = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M14,24c-.22,0-.44-.07-.62-.22-.22-.18-5.38-4.39-5.38-11.78S13.16,.39,13.38,.22c.43-.35,1.06-.27,1.41,.16,.34,.43,.27,1.06-.16,1.41-.04,.04-4.62,3.81-4.62,10.22s4.58,10.18,4.63,10.22c.43,.35,.5,.98,.15,1.41-.2,.25-.49,.37-.78,.37Z"/></svg>

);
