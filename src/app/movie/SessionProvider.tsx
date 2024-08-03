import { FC, ReactNode, useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";
import { useGetMeQuery, usePostRefreshTokenMutation } from "@/redux/api/auth";

interface SessionProviderProps {
  children: ReactNode;
}

export const SessionProvider: FC<SessionProviderProps> = ({ children }) => {
  const { status } = useGetMeQuery();
  const pathname = usePathname();
  const router = useRouter();
  const [refresh] = usePostRefreshTokenMutation();

  const refreshToken = JSON.parse(
    String(localStorage.getItem("refreshToken")) || "''"
  );

  const getNewToken = async () => {
    const { data } = await refresh({
      refreshToken,
    });

    if (data) {
      localStorage.setItem("accessToken", JSON.stringify(data));
      localStorage.setItem("refreshToken", JSON.stringify(data));
      window.location.reload();
    }
  };

  const handleNavigation = async () => {
    if (refreshToken && status === "rejected") {
      await getNewToken();
    }

    switch (pathname) {
      case "/auth/sign-in":
      case "/auth/sign-up":
      case "/auth/reset-password":
      case "/auth/forgot":
        if (status === "fulfilled") {
          router.push("/");
        }
        break;
      case "/":
      case "/profile":
        if (status === "rejected") {
          router.push("/auth/sign-in");
        }
        break;
      default:
        break;
    }
  };

  useEffect(() => {
    handleNavigation();
  }, [status, pathname, router]);

  return children;
};
