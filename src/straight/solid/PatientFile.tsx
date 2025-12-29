import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const PatientFile = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  <svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m21 9h-9.264l-4-2h-4.736c-1.654 0-3 1.346-3 3v14h24v-12c0-1.654-1.346-3-3-3zm-5 9h-3v3h-2v-3h-3v-2h3v-3h2v3h3zm-11-13v-2c0-1.654 1.346-3 3-3h7.414l3.586 3.586v3.414h-6.792l-4-2z"/></svg>
);
