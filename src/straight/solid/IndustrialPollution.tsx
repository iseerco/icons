import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const IndustrialPollution = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  <svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m9.5 3h-3.5c1-2 3.346-3 5-3h2c.641 0 1.219.248 1.662.645.509-.398 1.142-.645 1.838-.645.731 0 1.392.272 1.912.706.584-.438 1.302-.706 2.088-.706 1.933 0 3.5 1.567 3.5 3.5s-1.567 3.5-3.5 3.5c-1.097 0-2.064-.515-2.705-1.305-.393.189-.829.305-1.295.305-1.002 0-1.883-.496-2.428-1.25-.326.156-.687.25-1.072.25-.815 0-1.532-.396-1.989-1h-.011c-.28-.443-.649-.962-1.5-1zm7.5 11.804 7-6.304v12.5c0 1.654-1.346 3-3 3h-17c-1.654 0-3-1.346-3-3v-14h-1v-2h9v2h-1v13h2v-5.696l7-5.804zm2 5.196h2v-3h-2zm-4-3h-2v3h2z"/></svg>
);
