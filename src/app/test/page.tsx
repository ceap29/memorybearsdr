import CloudinaryTest from '@/components/CloudinaryTest';

export default function TestPage() {
  return (
    <main className="min-h-screen py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-8 text-navy-900">
          Cloudinary Image Testing
        </h1>
        <CloudinaryTest />
      </div>
    </main>
  );
} 