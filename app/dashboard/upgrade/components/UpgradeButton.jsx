import { Zap } from "lucide-react";
import Link from "next/link";

function UpgradeButton() {
  const CHEKOUT_URL =
    "https://ai-mock-interview.lemonsqueezy.com/buy/fb067b6b-7be5-43d7-9f4f-35608154d8ae";

  return (
    <Link
      href={CHEKOUT_URL}
      className="inline-flex items-center justify-center gap-2 px-8 py-4 text-white 
        bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg 
        hover:from-blue-600 hover:to-blue-700 transition-all"
    >
      <Zap className="w-5 h-5" />
      Upgrade to Pro
    </Link>
  );
}

export default UpgradeButton;