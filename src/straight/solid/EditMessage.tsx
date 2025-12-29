import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const EditMessage = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="M23.256,.742c-.99-.99-2.6-.99-3.59,0l-7.668,7.667v3.59h3.59l7.667-7.667c.479-.48,.744-1.117,.744-1.795s-.264-1.316-.744-1.795Zm.744,5.675v13.583h-6.852l-3.848,3.18c-.361,.322-.824,.484-1.292,.484-.476,0-.955-.168-1.337-.507l-3.749-3.157H0V3C0,1.346,1.346,0,3,0h14.581l-7.581,7.581v6.419h6.418l7.583-7.583Z"/>
</svg>

);
