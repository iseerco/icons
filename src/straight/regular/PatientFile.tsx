import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const PatientFile = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  <svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m21 8h-2v-4.584l-3.447-3.416h-7.553c-1.654 0-3 1.346-3 3v3h-2c-1.654 0-3 1.346-3 3v15h24v-13c0-1.654-1.346-3-3-3zm-14-5c0-.552.449-1 1-1h6v3h3v3h-5.264l-4-2h-.736zm15 19h-20v-13c0-.552.449-1 1-1h4.264l4 2h9.736c.551 0 1 .448 1 1zm-9-7h3v2h-3v3h-2v-3h-3v-2h3v-3h2z"/></svg>
);
