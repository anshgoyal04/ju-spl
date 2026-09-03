import DashboardOrderList from "@/components/sections/DashboardOrderList";
import UserAvatarMenu from "@/components/ui/UserAvatarMenu";
import { createClient } from "@/lib/supabase/server";
import { redirect } from "next/navigation";

export default async function DashboardPage() {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    redirect("/login");
  }

  const { data: profile } = await supabase.from("profiles").select("*").eq("id", user.id).single();

  return (
    <section className="section-pad pt-32">
      <div className="container-x">
        <div className="flex items-center justify-between">
          <div>
            <p className="eyebrow">{profile?.partner_type ?? "Partner"} Dashboard</p>
            <h1 className="h-display mt-2 text-2xl text-brand-black sm:text-3xl">
              Welcome, {profile?.full_name ?? user.email}
            </h1>
          </div>
          <UserAvatarMenu fullName={profile?.full_name ?? user.email ?? "?"} />
        </div>

        <p className="mt-2 text-sm text-brand-grey-700">
          {profile?.company_name} · {profile?.city}
        </p>

        <DashboardOrderList />
      </div>
    </section>
  );
}