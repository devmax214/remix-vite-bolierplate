import { useLoaderData, Outlet } from '@remix-run/react';
import { json } from "@remix-run/node";

export const loader = async () => {
  return json({ title: 'Demo' });
};

export default function Demo() {
  const { title } = useLoaderData<any>();

  return (
    <div>
      <h3>{title} Routing</h3>
      <Outlet />
    </div>
  )
}