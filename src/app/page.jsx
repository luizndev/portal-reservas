'use client'

import Image from "next/image";
import React from "react";
import { useRouter } from "next/navigation"

export default function Home() {
  const router = useRouter();

  React.useEffect(() => {
    router.push("/dashboard");
  }, [router]);
  return (
     <div>
     </div>
  );
}
