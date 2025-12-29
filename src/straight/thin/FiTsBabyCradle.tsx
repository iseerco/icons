import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiTsBabyCradle = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  <svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m23 6v4h-22v-6.258c.731-.553 3.703-2.584 8-2.733v3.062c-.86.224-1.5 1-1.5 1.929 0 1.103.897 2 2 2s2-.897 2-2c0-.929-.64-1.705-1.5-1.929v-4.071h-.5c-5.851.059-9.117 2.969-9.5 3.271v20.729h1v-2h22v2h1v-18zm-12.5 0c0 .552-.449 1-1 1s-1-.448-1-1 .449-1 1-1 1 .448 1 1zm-2.5 5h2v10h-2zm-1 10h-2v-10h2zm4-10h2v10h-2zm3 0h2v10h-2zm3 0h2v10h-2zm-16 0h3v10h-3zm19 10v-10h3v10z"/></svg>
);
