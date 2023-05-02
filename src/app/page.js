import Contents from '@/components/contents/contents';
import Gradient from '@/components/gradient/gradient';

export default function Home() {
  return (
    <main>
      <h3 style={{ marginBottom: '10px' }}>(프로젝트명)</h3>
      <h1>가제: 노인 안전 보행길</h1>
      <Gradient />
      <Contents />
      <div style={{ textAlign: 'right', fontSize: '14px' }}>
        가제: 노인 안전 보행길, 2023 프로젝트 ooo ooo
      </div>
    </main>
  );
}
