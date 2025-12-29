import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBrForm = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  <svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m17 17.5a1.5 1.5 0 0 1 -1.5 1.5h-7a1.5 1.5 0 0 1 0-3h7a1.5 1.5 0 0 1 1.5 1.5zm5-10.343v11.343a5.506 5.506 0 0 1 -5.5 5.5h-9a5.506 5.506 0 0 1 -5.5-5.5v-13a5.506 5.506 0 0 1 5.5-5.5h7.343a5.464 5.464 0 0 1 3.889 1.611l1.657 1.657a5.464 5.464 0 0 1 1.611 3.889zm-3.015-.157h-1.985a2 2 0 0 1 -2-2v-1.984c-.053-.004-7.5-.016-7.5-.016a2.5 2.5 0 0 0 -2.5 2.5v13a2.5 2.5 0 0 0 2.5 2.5h9a2.5 2.5 0 0 0 2.5-2.5s-.012-11.447-.015-11.5zm-4.485 2h-5a2.5 2.5 0 0 0 0 5h5a2.5 2.5 0 0 0 0-5z"/></svg>
);
