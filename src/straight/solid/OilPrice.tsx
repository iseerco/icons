import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const OilPrice = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  <svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m24 8c0 1.654-1.346 3-3 3v1h-2v-1c-1.654 0-3-1.346-3-3h2c0 .552.448 1 1 1h2c.552 0 1-.448 1-1 0-.379-.271-.698-.645-.761l-3.04-.506c-1.342-.224-2.315-1.374-2.315-2.733 0-1.654 1.346-3 3-3v-1h2v1c1.654 0 3 1.346 3 3h-2c0-.552-.448-1-1-1h-2c-.552 0-1 .448-1 1 0 .379.271.698.645.761l3.04.506c1.342.224 2.315 1.374 2.315 2.733zm-3 14h1v2h-20v-2h1v-7h5.257c-.4-.596-.629-1.281-.709-2h-5.548v-2h1v-9h-1v-2h14.031c-1.225.912-2.031 2.359-2.031 4v4c0 2.045 1.237 3.802 3 4.576v1.424h4zm-7.232-11.268-1.768-1.729-1.768 1.729c-.976.976-.976 2.559 0 3.536.488.488 1.128.732 1.768.732s1.28-.244 1.768-.732c.976-.976.976-2.559 0-3.536z"/></svg>
);
