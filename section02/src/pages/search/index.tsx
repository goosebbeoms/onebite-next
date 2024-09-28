import { useRouter } from "next/router";

export default function Page() {
  const router = useRouter(); // router 객체가 저장됨
  // console.log(router);

  // const q = router.query.q;
  const { q } = router.query;
  console.log(q);

  return <h1>Search {q}</h1>;
}
