import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const SciencePodcast = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  <svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m6 2h1v10c0 2.757 2.243 5 5 5s5-2.243 5-5v-10h1c.552 0 1-.447 1-1s-.448-1-1-1h-12c-.552 0-1 .447-1 1s.448 1 1 1zm6 13c-1.654 0-3-1.346-3-3v-4h6v4c0 1.654-1.346 3-3 3zm3-9h-6v-4h6zm-2 15.977v1.023c0 .553-.448 1-1 1s-1-.447-1-1v-1.023c-4.813-.238-8.72-4.065-8.986-8.922-.03-.552.393-1.023.944-1.053.539-.064 1.022.392 1.053.943.217 3.956 3.493 7.055 7.459 7.055h1.059c3.966 0 7.243-3.099 7.459-7.055.03-.552.504-1.007 1.053-.943.551.029.974.501.944 1.053-.266 4.857-4.173 8.685-8.986 8.922z"/></svg>
);
