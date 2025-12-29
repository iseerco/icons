import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const Lift = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  <svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m20.36 16.638-2.093-2.093c-.57-.57-.166-1.545.64-1.545h4.186c.806 0 1.21.975.64 1.545l-2.093 2.093c-.353.353-.927.353-1.28 0zm0-9.276-2.093 2.093c-.57.57-.166 1.545.64 1.545h4.186c.806 0 1.21-.975.64-1.545l-2.093-2.093c-.353-.353-.927-.353-1.28 0zm-11.36-7.362h-4c-2.757 0-5 2.243-5 5v14c0 2.757 2.243 5 5 5h4zm9.946 5.947c.308-.307.67-.524 1.054-.664v-.283c0-2.757-2.243-5-5-5h-4v24h4c2.757 0 5-2.243 5-5v-.283c-.384-.141-.746-.357-1.054-.664l-2.094-2.093c-.834-.833-1.081-2.076-.63-3.165.123-.297.293-.561.496-.794-.202-.233-.373-.498-.496-.794-.451-1.089-.204-2.332.63-3.166l2.094-2.093z"/></svg>
);
