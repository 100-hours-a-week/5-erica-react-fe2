import BottomSection from "../components/BottomSection";
import DescriptionSection from "../components/DescriptionSection";
import LogInSection from "../components/LogInSection";
import PostCountSection from "../components/PostCountSection";
import ReplySection from "../components/ReplySection";

export default function Home() {
  return (
    <>
      <LogInSection />
      <PostCountSection />
      <DescriptionSection />
      <ReplySection />
      <BottomSection />
    </>
  );
}
