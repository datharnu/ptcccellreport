import { Button } from "@/components/ui/button";
import { Rocket, Github, Zap } from "lucide-react";
import Image from "next/image";
import SignInPage from "../app/(auth)/sign-in/page";

export default function Home() {
  return (
    <div>
      <SignInPage />
    </div>
  );
}

