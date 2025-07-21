import { ThreeDots } from 'react-loader-spinner';

export default function Loader() {
  return (
    <div style={{ textAlign: 'center', padding: 20 }}>
      <ThreeDots height="80" width="80" color="#3f51b5" />
    </div>
  );
}
