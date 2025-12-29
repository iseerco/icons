import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBrStaffWizard = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  <svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m16.333 5.667-2.333-1.167 2.333-1.167 1.167-2.333 1.167 2.333 2.333 1.167-2.333 1.167-1.167 2.333zm-12.333 5.333-1 2-2 1 2 1 1 2 1-2 2-1-2-1zm9.061-.061c-1.834-1.835-.874-3.717-.767-3.91l.328-.558-.181-.621c-1.083-3.717-3.795-5.85-7.441-5.85-2.757 0-5 2.243-5 5 0 2.206 1.794 4 4 4 1.551 0 2.969-1 2.969-3 0-.865-.585-1.5-1.469-1.5-.828 0-1.5.672-1.5 1.5-.551 0-1-.448-1-1 0-1.103.897-2 2-2 2.143 0 3.618 1.065 4.39 3.169-.637 1.612-.893 4.449 1.55 6.892l10.961 10.962 2.121-2.121z"/></svg>
);
