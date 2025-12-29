import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const ForeignLanguageAudio = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="M2,5.993c-1.103,0-2,.899-2,2.003v8.013c0,1.104,.897,2.003,2,2.003h2.803l7.197,5.987V0L4.803,5.993H2Zm20.905,4.007c-.237,1.434-.95,3.441-2.372,5.089,.917,.548,2.047,.911,3.466,.911v2c-2.08,0-3.722-.606-5.005-1.516-1.282,.908-2.919,1.516-4.995,1.516v-2c1.418,0,2.558-.354,3.476-.902-.838-.97-1.432-2.067-1.826-3.098h2.174c.29,.612,.685,1.233,1.182,1.804,1.092-1.254,1.636-2.769,1.859-3.804h-6.864v-2h4v-2h2v2h4v2h-1.095Z"/>
</svg>

);
