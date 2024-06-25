import { useParams, useLoaderData } from '@remix-run/react';
import { json } from "@remix-run/node";

export const loader = async () => {
  return json({ title: 'Counter' });
};

export default function Counter() {
  const { title } = useLoaderData<any>();
  const params = useParams();
  return (
    <div>
      <p>{title}: {params?.num ?? 0}</p>
    </div>
  )
}