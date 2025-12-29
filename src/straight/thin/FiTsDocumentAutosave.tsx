import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiTsDocumentAutosave = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  <svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m1 2.5c0-.827.673-1.5 1.5-1.5h9.5v7h7v2.069c.341.043.674.109 1 .193v-2.969l-7.293-7.293h-10.207c-1.378 0-2.5 1.121-2.5 2.5v21.5h10v-1h-9zm12-.793 5.293 5.293h-5.293zm11 10.293v3c0 .552-.449 1-1 1h-3v-1h1.978c-.911-1.21-2.349-2-3.978-2-2.757 0-5 2.243-5 5h-1c0-3.309 2.691-6 6-6 2.099 0 3.932 1.092 5 2.731v-2.731zm-1 6h1c0 3.309-2.691 6-6 6-2.09 0-3.926-1.079-5-2.705v2.705h-1v-3c0-.552.449-1 1-1h3v1h-1.969c.91 1.209 2.342 2 3.969 2 2.757 0 5-2.243 5-5z"/></svg>
);
