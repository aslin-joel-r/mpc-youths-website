import { useEffect, useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { BookOpen } from 'lucide-react';

interface Verse {
  text: string;
  reference: string;
}

const verses: Verse[] = [
  {
    text: "For I know the plans I have for you, declares the Lord, plans to prosper you and not to harm you, to give you hope and a future.",
    reference: "Jeremiah 29:11"
  },
  {
    text: "Trust in the Lord with all your heart and lean not on your own understanding; in all your ways submit to him, and he will make your paths straight.",
    reference: "Proverbs 3:5-6"
  },
  {
    text: "And we know that in all things God works for the good of those who love him, who have been called according to his purpose.",
    reference: "Romans 8:28"
  },
  {
    text: "Be strong and courageous. Do not be afraid; do not be discouraged, for the Lord your God will be with you wherever you go.",
    reference: "Joshua 1:9"
  },
  {
    text: "The Lord your God is with you, the Mighty Warrior who saves. He will take great delight in you; in his love he will no longer rebuke you, but will rejoice over you with singing.",
    reference: "Zephaniah 3:17"
  },
  {
    text: "Cast all your anxiety on him because he cares for you.",
    reference: "1 Peter 5:7"
  },
  {
    text: "But those who hope in the Lord will renew their strength. They will soar on wings like eagles; they will run and not grow weary, they will walk and not be faint.",
    reference: "Isaiah 40:31"
  }
];

const TodaysVerse = () => {
  const [todaysVerse, setTodaysVerse] = useState<Verse | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Get today's date and use it to select a verse
    const today = new Date();
    const dayOfYear = Math.floor((today.getTime() - new Date(today.getFullYear(), 0, 0).getTime()) / (1000 * 60 * 60 * 24));
    const verseIndex = dayOfYear % verses.length;
    setTodaysVerse(verses[verseIndex]);

    // Trigger animation
    const timer = setTimeout(() => setIsVisible(true), 200);
    return () => clearTimeout(timer);
  }, []);

  if (!todaysVerse) return null;

  return (
    <section className="py-12 bg-gradient-to-r from-secondary/10 to-accent/10">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-primary mb-2">Today's Verse</h2>
            <div className="w-24 h-1 bg-secondary mx-auto rounded-full"></div>
          </div>
          
          <Card className={`verse-gradient border-0 shadow-lg card-hover pulse-glow ${isVisible ? 'section-fade-in animate' : 'section-fade-in'}`}>
            <CardContent className="p-8 text-center">
              <div className="flex justify-center mb-6">
                <BookOpen className="w-12 h-12 text-secondary" />
              </div>
              <blockquote className="text-lg md:text-xl text-foreground/90 italic leading-relaxed mb-6">
                "{todaysVerse.text}"
              </blockquote>
              <cite className="text-primary font-semibold text-lg">
                — {todaysVerse.reference}
              </cite>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default TodaysVerse;