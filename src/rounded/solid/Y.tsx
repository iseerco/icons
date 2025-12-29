import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const Y = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M21.633,.226c-.427-.348-1.057-.287-1.407,.142L12,10.421,3.774,.367c-.351-.429-.98-.49-1.407-.142-.428,.351-.491,.98-.142,1.407L11,12.357v10.643c0,.553,.447,1,1,1s1-.447,1-1V12.357L21.774,1.633c.35-.427,.286-1.057-.142-1.407Z"/></svg>

);
