import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const X = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M13.292,12L21.774,1.633c.35-.427,.286-1.057-.142-1.407-.428-.348-1.057-.287-1.407,.142L12,10.421,3.774,.367c-.351-.429-.98-.49-1.407-.142-.428,.351-.491,.98-.142,1.407L10.708,12,2.226,22.367c-.35,.427-.286,1.057,.142,1.407,.425,.348,1.056,.288,1.407-.142L12,13.579l8.226,10.053c.351,.43,.982,.489,1.407,.142,.428-.351,.491-.98,.142-1.407L13.292,12Z"/></svg>

);
