import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiTsTie = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m14.366,4.527l1.298-4.527h-7.327l1.298,4.527-2.676,14.943,5.042,4.481,5.042-4.481-2.676-14.943Zm-.029-3.527l-.86,3h-2.952l-.86-3h4.673Zm-6.295,18.095l2.524-14.095h2.869l2.524,14.095-3.958,3.519-3.958-3.519Z"/>
</svg>

);
