import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const KipSign = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M22,13c0,.55-.45,1-1,1H8.94l10.67,8.21c.44,.34,.52,.96,.18,1.4-.2,.26-.49,.39-.79,.39-.21,0-.43-.07-.61-.21L7,15.03v7.97c0,.55-.45,1-1,1s-1-.45-1-1V14H3c-.55,0-1-.45-1-1s.45-1,1-1h2V1c0-.55,.45-1,1-1s1,.45,1,1V10.72L18.32,.27c.41-.38,1.04-.35,1.41,.06,.38,.41,.35,1.04-.06,1.41L8.56,12h12.44c.55,0,1,.45,1,1Z"/></svg>

);
