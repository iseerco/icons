import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiTsArrowAltToBottom = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M13.354,22.39l5.771-6.39h-6.625V0h-1V16H4.875l5.769,6.389c.346,.389,.84,.611,1.356,.611s1.013-.224,1.354-.61Zm-1.964-.667l-4.266-4.724h9.75l-4.266,4.724c-.316,.356-.902,.356-1.219,0Zm9.609,1.276v1H3v-1H21Z"/></svg>

);
