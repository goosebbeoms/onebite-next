import { useRouter } from "next/router";

export default function Page() {
  const router = useRouter();
  // console.log(router);

  // const id = router.query.id;
  const { id } = router.query;

  return <h1>book {id}</h1>;
}
