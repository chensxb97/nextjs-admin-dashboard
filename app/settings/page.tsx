import { auth } from "@/lib//auth";
import { redirect } from "next/navigation";

export default async function SettingsPage() {
  const session = await auth()
  if (!session || !session.user) {
    redirect("/api/auth/signin?callbackUrl=/")
  }

  return (
    <main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-6">
      <div className="flex items-center">
        <h1 className="font-semibold text-lg md:text-2xl">Settings</h1>
      </div>
    </main>
  );
}
