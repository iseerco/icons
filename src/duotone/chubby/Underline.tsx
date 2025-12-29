import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const Underline = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  <svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m20.265 23h-16.53c-.552 0-1-.447-1-1s.448-1 1-1h16.53c.553 0 1 .447 1 1s-.447 1-1 1z"/><path d="m12.05 18.867c-5.711 0-7.735-3.381-7.735-12.92 0-1.491.066-2.855.198-4.055.06-.55.544-.948 1.103-.886.549.061.945.554.885 1.103-.124 1.128-.186 2.419-.186 3.838 0 10.16 2.271 10.92 5.735 10.92s5.735-.76 5.735-10.92c0-1.422-.062-2.713-.184-3.839-.06-.549.337-1.042.887-1.102.538-.062 1.042.337 1.102.887.13 1.196.195 2.561.195 4.054 0 9.66-1.952 12.92-7.735 12.92z" opacity=".5"/></svg>
);
