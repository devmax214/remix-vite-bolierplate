import { Outlet } from '@remix-run/react';

export default function Demo() {
  return (
    <div>
      <h3>Demo Routing</h3>
      <Outlet />
    </div>
  )
}