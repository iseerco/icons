import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const Museum = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  <svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m24 11.001v-3.091c0-1.099-.599-2.107-1.563-2.634l-9.001-4.908c-.899-.49-1.973-.49-2.873 0l-9 4.909c-.964.526-1.563 1.535-1.563 2.634v3.091h3v10.999h-3v2h24v-2h-3v-11zm-12-6.5c.828 0 1.5.672 1.5 1.5s-.672 1.5-1.5 1.5-1.5-.672-1.5-1.5.672-1.5 1.5-1.5zm-4 17.499h-3v-10.999h3zm6 0h-4v-10.999h4zm5 0h-3v-10.999h3z"/></svg>
);
