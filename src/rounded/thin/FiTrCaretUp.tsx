import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiTrCaretUp = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m17.757,16H6.243c-.508,0-.947-.291-1.144-.759-.198-.469-.1-.985.254-1.349l5.047-5.188c.794-.885,2.392-.899,3.213.015l5.034,5.173c.354.363.452.88.254,1.349-.197.468-.636.759-1.144.759Zm-5.757-7c-.336,0-.645.138-.869.388l-5.061,5.202c-.101.104-.068.218-.05.263.019.044.078.147.223.147h11.514c.145,0,.204-.104.223-.147.019-.045.051-.159-.05-.263l-5.047-5.188c-.238-.265-.547-.402-.883-.402Z"/>
</svg>

);
