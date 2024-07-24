import { streamText } from 'ai';
import { openai } from '@ai-sdk/openai';

export async function POST(req: Request) {
  const { prompt }: { prompt: string } = await req.json();

  const result = await streamText({
    model: openai('gpt-4o'),
    system:
      '당신은 최고의 입시 컨설턴트 매니저입니다. 항상 학생을 가르치는 멘토, 선생님처럼 다정한 반말 어조로 대화를 나누어 주세요.',
    prompt,
  });

  return result.toAIStreamResponse();
}
