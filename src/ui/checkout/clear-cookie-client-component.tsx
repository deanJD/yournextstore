"use client";

import { useRouter } from "next/navigation";
import { startTransition, useEffect } from "react";
import { clearCartCookieAction } from "@/actions/cart-actions";

// if current order cartId is the same as the cookie, clear the cookie
export const ClearCookieClientComponent = ({
	cartId,
	cookieId,
}: {
	cartId: string;
	cookieId: string | undefined;
}) => {
	const router = useRouter();

	const isSameCart = cartId === cookieId;
	useEffect(() => {
		startTransition(async () => {
			await clearCartCookieAction();
			router.refresh();
		});
	}, [isSameCart, router]);

	return null;
};
