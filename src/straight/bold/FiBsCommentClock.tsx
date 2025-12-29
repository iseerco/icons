import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsCommentClock = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  <svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m19 10c2.761 0 5-2.239 5-5s-2.239-5-5-5-5 2.239-5 5 2.239 5 5 5zm-1-8h2v2.586l1.707 1.707-1.414 1.414-2.293-2.293zm3 9.706c1.153-.343 2.18-.974 3-1.812v10.106h-6.672l-3.708 3.066c-.448.398-1.024.6-1.607.6-.594 0-1.195-.21-1.674-.635l-3.598-3.031h-6.741v-16.5c0-1.93 1.57-3.5 3.5-3.5h10.606c-.837.82-1.469 1.847-1.812 3h-8.794c-.276 0-.5.224-.5.5v13.5h4.836l4.167 3.511 4.246-3.511h4.751zm-14-2.706c.828 0 1.5.672 1.5 1.5s-.672 1.5-1.5 1.5-1.5-.672-1.5-1.5.672-1.5 1.5-1.5zm5 0c.828 0 1.5.672 1.5 1.5s-.672 1.5-1.5 1.5-1.5-.672-1.5-1.5.672-1.5 1.5-1.5z"/></svg>
);
