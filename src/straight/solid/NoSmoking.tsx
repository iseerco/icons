import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const NoSmoking = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="M9.758,14l6,6h-6.757v-6h.758ZM0,20H7v-6H0v6Zm20-6h-4.586L1.457,.043,.043,1.457,22.543,23.957l1.414-1.414-3.957-3.957v-4.586Zm2,6h2v-6h-2v6Zm-6.572-11.856l1.602,.961c.599,.359,.971,1.016,.971,1.715v1.18h2v-1.18c0-1.397-.744-2.711-1.941-3.43l-1.602-.961c-.898-.54-1.457-1.525-1.457-2.573v-1.856h-2v1.856c0,1.746,.931,3.389,2.428,4.288Zm6.145-3.167l-2.087-1.252c-.3-.18-.485-.508-.485-.857V0h-2V2.868c0,1.048,.558,2.034,1.456,2.572l2.087,1.252c.898,.539,1.457,1.524,1.457,2.572v.735h2v-.735c0-1.747-.931-3.389-2.428-4.287Z"/>
</svg>

);
