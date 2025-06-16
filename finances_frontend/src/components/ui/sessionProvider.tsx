"use client";
import { SessionProvider as NextAuthSessionProvider } from "next-auth/react";

import { ReactNode } from "react";

interface NextAuthSessionProviderProps {
    children: ReactNode;
}

export default function SessionProvider({
    children,
}: NextAuthSessionProviderProps) {
    return <NextAuthSessionProvider>{children}</NextAuthSessionProvider>;
}
