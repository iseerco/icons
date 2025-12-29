import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const Trading = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  <svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m5 16v-5h2v5zm6 0v-9h-2v9zm2 0h2v-6h-2zm8.685-10.733-3.04-.506c-.374-.062-.645-.382-.645-.761 0-.552.448-1 1-1h2c.552 0 1 .448 1 1h2c0-1.654-1.346-3-3-3v-1h-2v1c-1.654 0-3 1.346-3 3 0 1.359.974 2.51 2.315 2.733l3.04.506c.374.062.645.382.645.761 0 .552-.448 1-1 1h-2c-.552 0-1-.448-1-1h-2c0 1.654 1.346 3 3 3v1h2v-1c1.654 0 3-1.346 3-3 0-1.359-.974-2.51-2.315-2.733zm.315 12.733h-20v-13c0-.552.449-1 1-1h11c0-.712.154-1.386.424-2h-11.424c-1.654 0-3 1.346-3 3v15h11v2h-5v2h12v-2h-5v-2h11v-6h-2z"/></svg>
);
