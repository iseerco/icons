import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const QuestionSquare = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M21,0H3C1.346,0,0,1.346,0,3V24H24V3c0-1.654-1.346-3-3-3ZM13,18.982h-2v-2h2v2Zm.928-6.495c-.468,.258-.928,1.126-.928,1.752v.742h-2v-.742c0-1.19,.734-2.826,1.963-3.504,.763-.42,1.157-1.254,1.004-2.125-.138-.787-.81-1.458-1.596-1.596-.606-.107-1.195,.047-1.656,.435-.455,.381-.715,.94-.715,1.533h-2c0-1.185,.521-2.302,1.429-3.064,.908-.762,2.109-1.077,3.287-.873,1.613,.282,2.938,1.606,3.221,3.22,.298,1.699-.509,3.395-2.009,4.222Z"/></svg>

);
