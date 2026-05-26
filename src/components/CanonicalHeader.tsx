"use client";

import { usePathname } from "next/navigation";

export function CanonicalHeader() {
  const pathname = usePathname();
  // Remove trailing slash if present (except for root page) to maintain clean URL structure
  const cleanPath = pathname === "/" ? "" : pathname;
  const canonicalUrl = `https://www.gabrielkochem.adv.br${cleanPath}`;

  return (
    <link rel="canonical" href={canonicalUrl} />
  );
}
