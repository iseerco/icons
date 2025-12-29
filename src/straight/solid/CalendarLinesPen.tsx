import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const CalendarLinesPen = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M23.999,8H-.001v-3C-.001,3.346,1.344,2,2.999,2h3V0h2V2H15.999V0h2V2h3c1.654,0,3,1.346,3,3v3Zm-.743,4.742c-.99-.99-2.6-.99-3.59,0l-7.668,7.667v3.59h3.59l7.667-7.667c.479-.48,.744-1.117,.744-1.795s-.264-1.316-.744-1.795Zm-11.675,5.258l2-2H5v-2H15.582l2.672-2.671c.855-.856,1.995-1.329,3.209-1.329H0v14H10v-4H5v-2h6.581Z"/></svg>

);
