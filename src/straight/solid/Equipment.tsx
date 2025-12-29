import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const Equipment = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  <svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m22 20a2 2 0 0 1 -2 2h-4v-4h6v-2.9a6.014 6.014 0 0 0 -4.823-5.883l-1.736-.348-2.079 3.538-1.724-1.013 1.727-2.94a2.4 2.4 0 0 1 -.667-.244l-3.024 1.837-1.039-1.709 3.05-1.854-.048-.484h-3.637v-2h3.438l-.138-1.424a3 3 0 0 0 -3.681-2.49l-7.619 2.158v15.756h5v4h-5v2h20a4 4 0 0 0 4-4zm-8 2h-7v-4h7z"/></svg>
);
