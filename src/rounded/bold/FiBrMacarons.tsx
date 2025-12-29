import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBrMacarons = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  <svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m20 16.092c.031-1.667-.781-3.166-2.031-4.092 1.25-.926 2.062-2.425 2.031-4.092.581-.207 1-.756 1-1.408s-.419-1.201-1-1.408c.051-2.788-2.21-5.095-5-5.092h-6c-2.79-.003-5.051 2.304-5 5.092-.581.207-1 .756-1 1.408s.419 1.201 1 1.408c-.031 1.667.781 3.166 2.031 4.092-1.25.926-2.062 2.425-2.031 4.092-.581.207-1 .756-1 1.408s.419 1.201 1 1.408c-.051 2.788 2.21 5.095 5 5.092h6c2.79.003 5.051-2.304 5-5.092.581-.207 1-.756 1-1.408s-.419-1.201-1-1.408zm-3-.092h-10c0-1.103.897-2 2-2h6c1.103 0 2 .897 2 2zm-8-6c-1.103 0-2-.897-2-2h10c0 1.103-.897 2-2 2zm0-7h6c1.103 0 2 .897 2 2h-10c0-1.103.897-2 2-2zm6 18h-6c-1.103 0-2-.897-2-2h10c0 1.103-.897 2-2 2z"/></svg>
);
