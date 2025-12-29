import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const AnalyticsMagnifyingGlass = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  <svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m21 0h-18c-1.654 0-3 1.346-3 3v4h24v-4c0-1.654-1.346-3-3-3zm-17.5 5c-.828 0-1.5-.672-1.5-1.5s.672-1.5 1.5-1.5 1.5.672 1.5 1.5-.672 1.5-1.5 1.5zm4 0c-.828 0-1.5-.672-1.5-1.5s.672-1.5 1.5-1.5 1.5.672 1.5 1.5-.672 1.5-1.5 1.5zm16.459 17.545-2.792-2.792c.524-.791.833-1.736.833-2.753 0-2.757-2.243-5-5-5s-5 2.243-5 5 2.243 5 5 5c1.017 0 1.962-.309 2.753-.833l2.792 2.792zm-23.959-13.545v13h12.106c-1.298-1.271-2.106-3.04-2.106-5 0-3.866 3.134-7 7-7s7 3.134 7 7v-8zm4 10h-2v-4h2zm4 0h-2v-7h2z"/></svg>
);
