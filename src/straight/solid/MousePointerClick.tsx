import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const MousePointerClick = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  <svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m13 5h-2v-5h2zm6.773-1.376-1.421-1.407-3.518 3.553 1.421 1.407zm-10.607 2.146-3.518-3.553-1.421 1.407 3.518 3.553zm-2.161 3.243-5-.024-.01 2 5 .024zm2.957.718c0-.375.125-.746.353-1.047.566-.744 1.648-.918 2.412-.337l11.274 8.735-6.099.62 2.265 4.466-3.665 1.833-2.347-4.578-4.192 4.065v-13.758z"/></svg>
);
