import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const Macarons = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  <svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m4.276 8h15.447c-.621 1.742-2.271 3-4.224 3h-7c-1.953 0-3.602-1.258-4.224-3zm-.276-2h16c.552 0 1-.448 1-1s-.448-1-1-1h-.051c-.252-2.244-2.139-4-4.449-4h-7c-2.31 0-4.197 1.756-4.449 4h-.051c-.552 0-1 .448-1 1s.448 1 1 1zm16 11h-.051c-.252-2.244-2.139-4-4.449-4h-7c-2.31 0-4.197 1.756-4.449 4h-.051c-.552 0-1 .448-1 1s.448 1 1 1h16c.552 0 1-.448 1-1s-.448-1-1-1zm-11.5 7h7c1.953 0 3.602-1.258 4.224-3h-15.448c.621 1.742 2.271 3 4.224 3z"/></svg>
);
